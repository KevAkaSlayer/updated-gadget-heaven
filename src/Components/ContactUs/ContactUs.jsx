import { useState } from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [openModal, setOpenModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenModal(true);
        setFormData({ name: "", email: "", subject: "", message: "" }); 
    };

    const closeModal = () => setOpenModal(false);

    return (
        
        <div className="w-11/12 mx-auto mt-10">
            <Helmet>
                <title>Gadget Heaven | ContactUs</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center text-[#9538E2] mb-5">Contact Us</h1>
            <p className="text-center text-gray-600 mb-8">
                Feel free to reach out to us for any inquiries or assistance!
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
                <div>
                    <label className="block font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border p-2 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border p-2 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full border p-2 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full border p-2 rounded-md"
                        rows="4"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 mt-4 bg-[#9538E2] text-white font-bold rounded-lg hover:bg-[#7a2eb8]"
                >
                    Submit
                </button>
            </form>

            <Dialog open={openModal} handler={closeModal} size="sm">
                <DialogHeader className="text-center">Message Sent</DialogHeader>
                <DialogBody divider className="text-center">
                    Your message has been sent successfully! We’ll get back to you shortly.
                </DialogBody>
                <DialogFooter className="flex justify-center">
                    <Button className="btn bg-[#9538E2]" onClick={closeModal}>
                        Close
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default ContactUs;
