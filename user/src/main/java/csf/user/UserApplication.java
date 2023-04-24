package csf.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

// import csf.miniproject.csfserver.services.EmailService;


@SpringBootApplication
public class UserApplication {
	
	// @Autowired
	// private EmailService emailService;

	public static void main(String[] args) {
		SpringApplication.run(UserApplication.class, args);
	}

	// @EventListener(ApplicationReadyEvent.class)
	// public void sendEmail() {
	// 	emailService.sendEmail("nursakinah.arz@gmail.com", "This is a subject", "This is the body of the email");
	// }


}
