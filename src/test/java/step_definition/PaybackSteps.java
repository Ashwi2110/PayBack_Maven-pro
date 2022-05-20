package step_definition;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Scanner;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class PaybackSteps {

	private WebDriver driver;
	private PaybackPageFactory payback;
	XSSFWorkbook wb;
	XSSFSheet sh;

	@Before
	public void openBrowsser() throws IOException {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Sagar Jawale\\Desktop\\Chrome Driver\\chromedriver.exe");
		driver=new ChromeDriver();
		payback = new PaybackPageFactory(driver);
		payback = PageFactory.initElements(driver,PaybackPageFactory.class );
		FileInputStream fread=new FileInputStream("C:\\Users\\Sagar Jawale\\Desktop\\payback_excel.xlsx");
		wb=new XSSFWorkbook(fread);
		WebDriverWait wait = new WebDriverWait(driver, 10);
	}


	/*For Login_To_PayBack*/

	@Given("User is on Login Page")
	public void user_is_on_Login_Page() {
		ChromeOptions options=new ChromeOptions();
		options.addArguments("--disable-notifications");
		driver.navigate().to("https://www.payback.in/");
		driver.manage().window().maximize();
		System.out.println("User is on Payback page");
		payback.login.click();
		System.out.println("User is on Login page");
	}


	@When("user enter the {string} as <mobno> on Login Page")
	public void user_enter_the_as_mobno_on_Login_Page(String string) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		payback.number.clear();
		payback.number.sendKeys("9172137396");
		Thread.sleep(2000);
	}

	@When("user enter {string} as <pin> on Login Page")
	public void user_enter_as_pin_on_Login_Page(String string) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		payback.pin.sendKeys("5254");
		Thread.sleep(2000);
	}

	@Then("user Click on the {string} button on Login Page")
	public void user_Click_on_the_button_on_Login_Page(String string) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(8000);
		payback.loginClick.click();
		System.out.println("User has provided number");
		System.out.println("User has provided Pin");
		System.out.println("User has checked captcha manually");
		System.out.println("User has logged in successfully");
		driver.close();
	}
	/*End of Login to PayBack*/

	/*For Pizza hut Validation*/

	@Given("user clicks on the {string} Option")
	public void user_clicks_on_the_Option(String string) {
		ChromeOptions options=new ChromeOptions();
		options.addArguments("--disable-notifications");
		driver.navigate().to("https://www.payback.in/");
		driver.manage().window().maximize();
		payback.redeemtext1.click();
		System.out.println("User has selected Redeem Points Option");
		payback.redeemtext2.click();
		System.out.println("User has selected Redeem Points Option from dropdown ");
	}

	@When("user select any product")
	public void user_select_any_product() throws InterruptedException {
		payback.evoucher.click();
		Thread.sleep(3000);
	}
	@When("user clicks on {string} Option")
	public void user_clicks_on_Option(String string) throws InterruptedException {
		driver.navigate().to("https://www.gyftr.com/payback/pizza-hut-gift-vouchers?token=TEMPXYZ786");
		ChromeOptions options=new ChromeOptions();
		options.addArguments("--disable-notifications");
		driver.manage().window().maximize();
		System.out.println("Redeem Points");
		Thread.sleep(5000);
		payback.place.click();
		System.out.println("User clicked on Place Order");
	}

	@When("user should enter registered mobile number")
	public void user_should_enter_registered_mobile_number() {
		payback.link_mobile.sendKeys("9172137396");
		System.out.println("Mobile number entered");
	}

	@When("user enters on next")
	public void user_enters_on_next() throws InterruptedException {
		payback.next.click();
		System.out.println("Clicked on Next");
		Thread.sleep(3000);
	}

	@When("user adds {string} number as <pin>")
	public void user_adds_number_as_pin(String string) throws InterruptedException {
		Thread.sleep(2000);
		payback.pswd.sendKeys("5254");
		System.out.println("Pin entered");
		Thread.sleep(5000);
	}

	@When("user clicks on {string}")
	public void user_clicks_on(String string) throws InterruptedException {
		Thread.sleep(5000);
		payback.submit.click();
		System.out.println("Login successful");
	}

	@When("user clicks on {string} Option in E-Voucher page")
	public void user_clicks_on_Option_in_E_Voucher_page(String string) throws InterruptedException {
		Thread.sleep(5000);
		payback.place.click();
		System.out.println("User clicked on Place Order");
	}


	@When("user should enter {string} as <otp> on Confirm OTP page")
	public void user_should_enter_as_otp_on_Confirm_OTP_page(String string) throws InterruptedException {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter OTP");
		String otp_num=sc.next();
		Thread.sleep(8000);
		payback.otp.sendKeys(otp_num);
		System.out.println("OTP Entered");

	}
	@When("user should click on {string} option on Confirm OTP page")
	public void user_should_click_on_option_on_Confirm_OTP_page(String string) throws InterruptedException {  
		WebDriverWait wait = new WebDriverWait(driver, 10);   
		//   WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"__next\"]/section/div/div/div[2]/div[3]/form/div/label")));
		//  element.click();

		// WebElement element=driver.findElement(By.xpath("//label[@for='i_adree']"));
		//WebElement element=driver.findElement(By.xpath("(//label//text())[1]"));
		// wait.until(ExpectedConditions.elementToBeClickable(element));
		Thread.sleep(5000);
		// payback.check.click();

	}

	@Then("click on {string} on E-Voucher page")
	public void click_on_on_E_Voucher_page(String string) throws InterruptedException {
		Thread.sleep(8000);
		payback.confirm.click();
		driver.close();
	}
	/*End of Pizza hut Validation*/


	/*Start Smart Watch*/

	@Given("user clicks on the {string} Option to validate")
	public void user_clicks_on_the_Option_to_validate(String string) {
		ChromeOptions options=new ChromeOptions();
		options.addArguments("--disable-notifications");
		driver.navigate().to("https://www.payback.in/");
		driver.manage().window().maximize();
		payback.redeemtext1.click();
		System.out.println("User has selected Redeem Points Option");
		payback.redeemtext2.click();
		System.out.println("User has selected Redeem Points Option from dropdown ");
	}

	@When("user select any product In Products Option")
	public void user_select_any_product_In_Products_Option() {
		payback.product_sel.click();
		driver.navigate().to("https://www.payback.in/rewards/product-details/-noise-colorfit-pro-2-oxy-smart-watch-/23463");
		System.out.println("User selected the product ");
	}

	@When("user selects {string} as <qty>")
	public void user_selects_as_qty(String string) throws InterruptedException {
		payback.qty_sel.clear();
		payback.qty_sel.sendKeys("2");
		System.out.println("User entered Quantity");
		Thread.sleep(2000);
	}

	@When("user clicks on {string} Option to Login")
	public void user_clicks_on_Option_to_Login(String string) {
		payback.confirm_pro.click();
		System.out.println("User clicked on confirm");
	}

	@When("user should enter registered mobile number in Products Option")
	public void user_should_enter_registered_mobile_number_in_Products_Option() throws InterruptedException {
		payback.mob_pro.sendKeys("9172137396");
		System.out.println("User entered mobile number");
		Thread.sleep(5000);

	}

	@When("user adds {string} number as <pin> in Products Option")
	public void user_adds_number_as_pin_in_Products_Option(String string) throws InterruptedException {
		payback.pin_pro.sendKeys("5254");
		System.out.println("User entered PIN");
		Thread.sleep(8000);
	}

	@When("user clicks on {string} option")
	public void user_clicks_on_option(String string) throws InterruptedException {
		Thread.sleep(8000);
		payback.login_pro.click();
		System.out.println("User Logged in successfully");
	}


	@Then("clicks on {string} Option to check availability")
	public void clicks_on_Option_to_check_availability(String string) throws InterruptedException {
		WebDriverWait wait = new WebDriverWait(driver, 10); 
		Thread.sleep(12000);
		payback.confirm_pro2.click();
		System.out.println("User Confirmed the product");
		driver.close();
	}

	/*End to Smart Watch*/

	
	
	/*Start Bill*/
	
//	@Given("user clicks on the {string} Option to for Recharge")
//	public void user_clicks_on_the_Option_to_for_Recharge(String string) throws InterruptedException {
//		ChromeOptions options=new ChromeOptions();
//		options.addArguments("--disable-notifications");
//		driver.navigate().to("https://www.payback.in/");
//		driver.manage().window().maximize();
//		payback.redeemtext1.click();
//		System.out.println("User has selected Redeem Points Option");
//		payback.redeemtext2.click();
//		System.out.println("User has selected Redeem Points Option from dropdown ");
//		Thread.sleep(3000);
//
//	}
//	
//	@When("user enters linked {string} as <mob>")
//	public void user_enters_linked_as_mob(String string) throws InterruptedException {
//		//driver.navigate().to("https://www.gyftr.com/payback/lifestyle-gift-vouchers?token=TEMPXYZ786");
//		System.out.println("User has selected Recharge option ");
//		Thread.sleep(5000);
//		payback.mobilElement.sendKeys("9172137396");
//		Thread.sleep(3000);
//	}
//
//	@When("user enters the {string} as <pin> to login")
//	public void user_enters_the_as_pin_to_login(String string) throws InterruptedException {
//		Thread.sleep(3000);
//		payback.pin1.sendKeys("5254");
//		Thread.sleep(2000);
//	}
//
//	@When("clicks on {string} Button to Login to portal")
//	public void clicks_on_Button_to_Login_to_portal(String string) throws InterruptedException {
//		Thread.sleep(8000);	
//		payback.log1.click();
//	}
//
//	@When("user {string} as <mob{int}> to recharge")
//	public void user_as_mob_to_recharge(String string, Integer int1) throws InterruptedException {
//		Thread.sleep(2000);
//		payback.mobile_enter.sendKeys("9172137396");
//	}
//
//	@When("user enters {string} as <amt> to recharge")
//	public void user_enters_as_amt_to_recharge(String string) throws InterruptedException {
//		Thread.sleep(4000);
//		payback.amt_enter.sendKeys("200");
//
//
//	}
//	@When("user clicks on {string} for process")
//	public void user_clicks_on_for_process(String string) throws InterruptedException {
//		Thread.sleep(5000);
//	}
//
//	@Then("clicks on {string} Option to Recharge")
//	public void clicks_on_Option_to_Recharge(String string) throws InterruptedException {
//		Thread.sleep(2000);
//		payback.recharge_placeorder.click();
//		driver.close();
//	}
//
//	/*End Start Bill*/
//	

}
