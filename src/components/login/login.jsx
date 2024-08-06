import { motion } from "framer-motion"
import { useForm } from "react-hook-form";

export const LoginForm = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    return (
         <div>
            <motion.div>
                nome
            </motion.div>
            <motion.div>
                email
            </motion.div>
            <motion.div>
                password
            </motion.div>
         </div>
    )
}
