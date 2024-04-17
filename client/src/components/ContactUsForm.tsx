import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { BASE_URL } from "../utils/baseUrl";
import axios from "axios";

export default function ContactUsForm() {
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        message: ''
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);

            const response = await axios.post(BASE_URL + "/api/v1/contact", formData);
            
            alert(response.data.message);

            setFormData({ 
                name: '', 
                email: '', 
                companyName: '',
                message: '' 
            });

            setIsFormSubmitting(false);

        } catch (error) {
            setIsFormSubmitting(false);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <section className="bg-gray-100 h-screen">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <div className="flex flex-col gap-4">
                            <p className="font-medium text-sm">CONTACT US</p>
                            <h1 className="max-w-xl text-5xl font-bold text-indigo-600">
                                Let's Talk
                            </h1>
                            <p className="text-gray-500">We will reach out to you within 24 hours</p>
                        </div>

                        <div className="mt-8">
                            <p className="font-medium">
                                Don't like filling up form? Email us directly at:
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <IoMailOutline size={20} className="text-indigo-600" />
                                <p>hr@truedax.io</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 h-full">
                        <form onSubmit={handleSubmit} className="space-y-7">
                            <div>
                                <label className="input_label" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="given-name"
                                    value={formData.name} 
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter your name"
                                    className="input_field"
                                />
                            </div>

                            <div className="">
                                <div>
                                <label className="input_label" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email} 
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Email address"
                                    className="input_field"
                                />
                                </div>
                            </div>

                            <div>
                                <label className="input_label" htmlFor="name">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    autoComplete="given-name"
                                    value={formData.companyName} 
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter your company name"
                                    className="input_field"
                                />
                            </div>

                            <div>
                                <label className="input_label" htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    value={formData.message} 
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter your query here"
                                    className="input_field"
                                    defaultValue={''}
                                />
                            </div>

                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {
                                        isFormSubmitting ? "Submitting" : "Let's talk"
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
