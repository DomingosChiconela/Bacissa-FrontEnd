import { useState } from 'react';
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
import { Header } from '../header';
import '../table.css';



export const Users = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ id: '', name: '', age: '', gender: '', profilePicture: '' });
    const [showForm, setShowForm] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [open, setOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (editUser) {
            setEditUser({ ...editUser, [name]: value });
        } else {
            setNewUser({ ...newUser, [name]: value });
        }
    };

    const handleAddUser = () => {
        const randomGender = newUser.gender === 'male' ? 'men' : 'women';
        const randomIndex = Math.floor(Math.random() * 100);
        const profilePicture = `https://randomuser.me/api/portraits/${randomGender}/${randomIndex}.jpg`;

        setUsers([...users, { ...newUser, profilePicture }]);
        setNewUser({ id: '', name: '', age: '', gender: '', profilePicture: '' });
        setShowForm(false);
        toast.success("Novo estudante adicionado com sucesso!");
    };

    const handleEditUser = () => {
        const editedUsers = users.map(user =>
            user.id === editUser.id ? { ...editUser } : user
        );
        setUsers(editedUsers);
        setEditUser(null);
        setOpen(false);
        setIsEditMode(false);
        toast.success("Informações do estudante atualizadas com sucesso!");
    };

    const handleRowClick = (rowData, rowMeta) => {
        const user = users[rowMeta.dataIndex];
        setEditUser(user);
        setOpen(true);
        setIsEditMode(false);
    };

    const handleClose = () => {
        setOpen(false);
        setEditUser(null);
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
        { name: 'age', label: "Idade" },
        {
            name: 'gender',
            label: "Gênero",
            options: {
                customBodyRender: (data) => (
                    <p className={`capitalize px-3 py-1 inline-block rounded-full ${
                        data === "male" ? "bg-blue-500 text-white" : "bg-pink-500 text-white"
                    }`}>
                        {data === "male" ? "Masculino" : "Feminino"}
                    </p>
                )
            }
        }
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
            typography: {
                fontFamily: "Poppins"
            },
            palette: {
                background: {
                    paper: "black",
                    default: "#0f172a"
                },
                mode: 'dark'
            },
            components: {
                MuiTableCell: {
                    styleOverrides: {
                        head: {
                            padding: "10px 4px"
                        },
                        body: {
                            color: "#e2e8f0"
                        }
                    }
                }
            }
        });

    return (
        <div className='bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-2xl'>
            <Header />
            <div className="bg-gradient-to-r from-green-400 to-green-600 py-10 min-h-screen grid place-items-center">
                <div className="w-10/12 max-w-4xl">
                    <ThemeProvider theme={getMuiTheme()}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MUIDataTable
                                title={"Estudantes da Bytes"}
                                data={users}
                                columns={columns}
                                options={options}
                            />
                        </motion.div>
                    </ThemeProvider>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={!showForm ? "mt-4 bg-gradient-to-r from-black to-gray-800 hover:bg-blue-600 text-white px-4 py-2 rounded" : "hidden"}
                >
                    <button onClick={() => setShowForm(true)}>Adicionar Usuário</button>
                </motion.div>
                
                <CSSTransition
                    in={showForm}
                    timeout={300}
                    classNames="form"
                    unmountOnExit
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 bg-gray-800 p-4 rounded"
                    >
                        <h2 className="text-lg mb-2 text-white">Adicionar Novo Usuário</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="number" name="id" value={newUser.id} onChange={handleInputChange} placeholder="ID" className="border p-2 rounded" />
                            <input type="text" name="name" value={newUser.name} onChange={handleInputChange} placeholder="Nome" className="border p-2 rounded" />
                            <input type="number" name="age" value={newUser.age} onChange={handleInputChange} placeholder="Idade" className="border p-2 rounded" />
                            <select name="gender" value={newUser.gender} onChange={handleInputChange} className="border p-2 rounded">
                                <option value="">Selecione o Gênero</option>
                                <option value="male">Masculino</option>
                                <option value="female">Feminino</option>
                            </select>
                        </div>
                        <motion.button
                            onClick={handleAddUser}
                            className="mt-4 bg-gradient-to-r from-black to-gray-800 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Adicionar Usuário
                        </motion.button>
                    </motion.div>
                </CSSTransition>
            </div>
            <ToastContainer />
            <CSSTransition
                in={open}
                timeout={300}
                classNames="modal"
                unmountOnExit
            >
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{isEditMode ? "Editar Informações do Estudante" : "Detalhes do Estudante"}</DialogTitle>
                    <DialogContent>
                        {editUser && (
                            <>
                                <div className="flex justify-center mb-4">
                                    <img src={editUser.profilePicture} alt={editUser.name} className="w-24 h-24 rounded-full" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <strong>ID:</strong> {isEditMode ? (
                                            <input type="text" name="id" value={editUser.id} onChange={handleInputChange} className="border p-2 rounded" />
                                        ) : editUser.id}
                                    </div>
                                    <div>
                                        <strong>Nome:</strong> {isEditMode ? (
                                            <input type="text" name="name" value={editUser.name} onChange={handleInputChange} className="border p-2 rounded" />
                                        ) : editUser.name}
                                    </div>
                                    <div>
                                        <strong>Idade:</strong> {isEditMode ? (
                                            <input type="number" name="age" value={editUser.age} onChange={handleInputChange} className="border p-2 rounded" />
                                        ) : editUser.age}
                                    </div>
                                    <div>
                                        <strong>Gênero:</strong> {isEditMode ? (
                                            <select name="gender" value={editUser.gender} onChange={handleInputChange} className="border p-2 rounded">
                                                <option value="male">Masculino</option>
                                                <option value="female">Feminino</option>
                                            </select>
                                        ) : editUser.gender === "male" ? "Masculino" : "Feminino"}
                                    </div>
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
    );
};
