const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'www.sajeewasajeewa@gmail.com',
				pass: "jafqjkowfasgbfya",
			},
		});

		await transporter.sendMail({
			from: 'www.sajeewasajeewa@gmail.com',
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};