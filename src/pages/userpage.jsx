import { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { CSSTransition } from 'react-transition-group';
import { motion } from 'framer-motion';
import { Header } from '../components/header';
import { useAuth } from '../AuthContext';

export const Users = () => {
    const { user } = useAuth(); 
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ id: '', name: '', email: '', region: '', profilePicture: '' });
    const [showForm, setShowForm] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [open, setOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        const usersList = [];

        if (user) {
            usersList.push({
                id: user.id,
                name: user.name,
                email: user.email,
                region: "Maputo", 
                profilePicture: user.profilePicture || 'https://randomuser.me/api/portraits/men/1.jpg' 
            });
        }

        if (user && user.users) {
            const simulatedUsers = user.users.map(u => ({
                id: u.id,
                name: u.name,
                email: u.email,
                region: u.region,
                profilePicture: u.profilePicture || 'https://randomuser.me/api/portraits/men/4.jpg'
            }));
            setUsers([...usersList, ...simulatedUsers]);
        } else {
            const simulatedUsers = [
                { id: '1', name: 'Usuário 1', email: 'usuario1@example.com', region: 'Inhambane', profilePicture: 'https://randomuser.me/api/portraits/men/10.jpg' },
                { id: '2', name: 'Usuário 2', email: 'usuario2@example.com', region: 'gaza', profilePicture: 'https://randomuser.me/api/portraits/women/8.jpg' },
            ];
            setUsers([...usersList, ...simulatedUsers]);
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (isEditMode) {
            setEditUser({ ...editUser, [name]: value });
        } else {
            setNewUser({ ...newUser, [name]: value });
        }
    };

    const handleAddUser = () => {
        const randomIndex = Math.floor(Math.random() * 100);
        const profilePicture = `https://randomuser.me/api/portraits/men/${randomIndex}.jpg`;

        setUsers([...users, { ...newUser, profilePicture }]);
        setNewUser({ id: '', name: '', email: '', region: '', profilePicture: '' });
        setShowForm(false);
        toast.success("Novo usuário adicionado com sucesso!");
    };

    const handleEditUser = () => {
        const editedUsers = users.map(user =>
            user.id === editUser.id ? { ...editUser } : user
        );
        setUsers(editedUsers);
        setEditUser(null);
        setOpen(false);
        setIsEditMode(false);
        toast.success("Informações do usuário atualizadas com sucesso!");
    };

    const handleRowClick = (rowData, rowMeta) => {
        const user = users[rowMeta.dataIndex];
        setEditUser(user);
        setIsEditMode(true);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditUser(null);
        setIsEditMode(false);
    };

    const columns = [
        {
            name: 'profilePicture',
            label: "Foto",
            options: {
                customBodyRender: (value) => (
                    <img src={value} alt="Profile" className="w-10 h-10 rounded-full" />
                ),
                filter: false,
            }
        },
        { name: 'id', label: "ID" },
        { name: 'name', label: "Nome" },
        { name: 'email', label: "Email" },
        { name: 'region', label: "Região" }
    ];

    const options = {
        selectableRows: true,
        elevation: 0,
        rowsPerPage: 10,
        rowsPerPageOptions: [5, 10, 15, 20, 30],
        onRowClick: handleRowClick,
    };

    const getMuiTheme = () =>
        createTheme({
            palette: {
                mode: 'dark',
            },
        });

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className='flex-grow bg-gradient-to-r from-blue-400 to-purple-600 flex justify-center items-center'>
                <div className="w-full max-w-4xl p-4">
                    <ThemeProvider theme={getMuiTheme()}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                        >
                            <MUIDataTable
                                title={"Usuários"}
                                data={users}
                                columns={columns}
                                options={options}
                            />
                        </motion.div>
                    </ThemeProvider>

                    {showForm ? (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.0 }}
                            className=" p-4 rounded mt-4"
                        >
                            <h2 className="text-lg mb-2 text-white">Adicionar Novo Usuário</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="number" name="id" value={newUser.id} onChange={handleInputChange} placeholder="ID" className="border p-2 rounded text-white bg-gray-700" />
                                <input type="text" name="name" value={newUser.name} onChange={handleInputChange} placeholder="Nome" className="border p-2 rounded text-white bg-gray-700" />
                                <input type="email" name="email" value={newUser.email} onChange={handleInputChange} placeholder="Email" className="border p-2 rounded text-white bg-gray-700" />
                                <input type="text" name="region" value={newUser.region} onChange={handleInputChange} placeholder="Região" className="border p-2 rounded text-white bg-gray-700" />
                            </div>
                            <motion.button
                                onClick={handleAddUser}
                                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Adicionar Usuário
                            </motion.button>
                        </motion.div>
                    ) : (
                        <button onClick={() => setShowForm(true)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Adicionar Usuário</button>
                    )}

                    <ToastContainer />
                    <CSSTransition
                        in={open}
                        timeout={300}
                        classNames="modal"
                        unmountOnExit
                    >
                        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                            <DialogTitle className="bg-gray-800 text-white">{isEditMode ? "Editar Informações do Usuário" : "Detalhes do Usuário"}</DialogTitle>
                            <DialogContent className="bg-gray-800 text-white">
                                {editUser && (
                                    <>
                                        <div className="flex justify-center mb-4">
                                            <img src={editUser.profilePicture} alt={editUser.name} className="w-28 h-28 rounded-full" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div><strong>ID:</strong> {editUser.id}</div>
                                            <div><strong>Nome:</strong> {isEditMode ? (
                                                <input type="text" name="name" value={editUser.name} onChange={handleInputChange} className="border p-2 rounded text-white bg-gray-700" />
                                            ) : editUser.name}</div>
                                            <div><strong>Email:</strong> {isEditMode ? (
                                                <input type="email" name="email" value={editUser.email} onChange={handleInputChange} className="border p-2 rounded text-white bg-gray-700" />
                                            ) : editUser.email}</div>
                                            <div><strong>Região:</strong> {isEditMode ? (
                                                <input type="text" name="region" value={editUser.region} onChange={handleInputChange} className="border p-2 rounded text-white bg-gray-700" />
                                            ) : editUser.region}</div>
                                        </div>
                                    </>
                                )}
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">Cancelar</Button>
                                {isEditMode ? (
                                    <Button onClick={handleEditUser} color="primary">Salvar</Button>
                                ) : (
                                    <Button onClick={() => setIsEditMode(true)} color="primary">Editar</Button>
                                )}
                            </DialogActions>
                        </Dialog>
                    </CSSTransition>
                </div>
            </div>
        </div>
    );
};
