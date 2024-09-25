import {VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE} from "./emailTemplates.js";
import { Mailclient, sender } from "./mailtrap_config.js";



export const sendVerificationEmail = async (email, verificationToken) => {
	const recipient = [{ email }];

	try {
		const response = await Mailclient.send({
			from: sender,
			to: recipient,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification",
		});

		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
};


export const sendWelcomeEmail  = async(email,name)=>{
    const recipient = [{ email }];

    try{
        const response = await Mailclient.send({
            from: sender,
            to: recipient,
            template_uuid: "b8b69e0f-4a06-49ba-b464-5cbe04ebc1d3",
            template_variables: {
                      "name": name,
                     "company_info_name": "planity",
                     "company_info_address": "Sricity Chittor",
                     "company_info_city": "Tirupati district",
                     "company_info_zip_code": "517451",
                     "company_info_country": "India"
                   }
        })
    
    }

    catch(error){
        console.error(`Error sending welcome email`);
        throw new Error(`Error sending welcome email: ${error}`);
    }
    
    
}

export const sendResetPasswordMail = async(email, resetLink)=>{
    const recipient = [{ email }];
    try{
        const response = await Mailclient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetLink),
            category: "Reset Password",

        });
        

        }
        

    
    catch(error){
        console.error(`Error sending reset password email`);
        throw new Error(`Error sending reset password email: ${error}`);
    }
}


export const sendResetSuccessMail = async(email)=>{
    const recipient = [{ email }];
    try{
        const response = await Mailclient.send({
            from: sender,
            to: recipient,
            subject: "Password reset successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Reset Password",
        });

     

    }

    catch(error){
        console.error(`Error sending reset success email`);
        throw new Error(`Error sending reset success email: ${error}`);
        
    }

}