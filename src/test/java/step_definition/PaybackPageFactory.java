package step_definition;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
public class PaybackPageFactory {
WebDriver driver;
	/*Login to pAyBack Page*/
	@FindBy(linkText = "Login")
	@CacheLookup
	WebElement login;
	
	@FindBy(name ="card_number")
	@CacheLookup
	WebElement number;
	
	@FindBy(name ="pin_number")
	@CacheLookup
	WebElement pin;
	
	
	@FindBy(xpath = "//button[@class='btn pb-login-submit red-button']") 
	@CacheLookup
	WebElement loginClick;
	/*End of Login Page*/
	
	/*Pizza Hut Validation*/
	@FindBy(linkText = "Redeem Points") 
	@CacheLookup
	WebElement redeemtext1;
	
	
	@FindBy(xpath = "//a[@data-clicktext='Redeem Points']") 
	@CacheLookup
	WebElement redeemtext2;
	
	@FindBy(xpath = "(//img[@class=' lazyloaded'])[2]") 
	@CacheLookup
	WebElement evoucher;
	
	
	@FindBy(xpath = "//button[@class='btn btn-payback']") 
	@CacheLookup
	WebElement place;
	
	@FindBy(xpath = "//input[@name='cardMobile']") 
	@CacheLookup
	WebElement link_mobile;
	
	@FindBy(xpath = "(//button[@type='button'])[6]")
	@CacheLookup
	WebElement next;
	
	@FindBy(xpath = "//input[@name='pin']") 
	@CacheLookup
	WebElement pswd;
	
	@FindBy(xpath = "(//button[@type='button'])[6]") 
	@CacheLookup
	WebElement submit;
	
	@FindBy(name = "otp") 
	@CacheLookup
	WebElement otp;

	@FindBy(xpath = "(//button[@type='button'])[3]") 
	@CacheLookup
	WebElement confirm;
	
	/*End Pizza Hut Validation*/
	
	/*Start Smart Watch*/
	
	@FindBy(xpath = "(//img[@class='img-responsive'])[3]") 
	@CacheLookup
	WebElement product_sel;
	
	@FindBy(xpath = "//input[@list='pb-qty-dropdown']") 
	@CacheLookup
	WebElement qty_sel;
	
	@FindBy(id = "redeemBtn") 
	@CacheLookup
	WebElement confirm_pro;
	
	@FindBy(id = "pb-pop-card-number") 
	@CacheLookup
	WebElement mob_pro;
	
	@FindBy(id = "pb-pop-pin-number") 
	@CacheLookup
	WebElement pin_pro;
	
	@FindBy(xpath = "(//button[@type=\"submit\"])[2]") 
	@CacheLookup
	WebElement login_pro;
	
	@FindBy(id = "redeemBtn") 
	@CacheLookup
	WebElement confirm_pro2;
	
	/*End Smart Watch*/
	
//	/*Start Bill*/
//	
//	@FindBy(xpath = "(//img[@class=' lazyloaded'])[3]") 
//	@CacheLookup
//	WebElement recharge;
//	
//	
//	@FindBy(xpath = "//*[@id='autocomplete-input']") 
//	@CacheLookup
//	WebElement mobilElement;
//	
//	@FindBy(xpath = "//*[@id=\"autocomplete-input_pin\"]") 
//	@CacheLookup
//	WebElement pin1;
//	
//	@FindBy(xpath = "//button[@onclick=\"submitform(this.form)\"]") 
//	@CacheLookup
//	WebElement log1;
//	
//	@FindBy(id="autocomplete-input") 
//	@CacheLookup
//	WebElement mobile_enter;
//	
//	@FindBy(id = "amountPlan") 
//	@CacheLookup
//	WebElement amt_enter;
//	
//	@FindBy(xpath = "//input[@name='tnc']") 
//	@CacheLookup
//	WebElement recharge_check;
//	
//	@FindBy(xpath = "//button[@type='button']") 
//	@CacheLookup
//	WebElement recharge_placeorder;
//	/*End Bill*/
	
	public WebElement fieldNumber(){
		return number;
		}

		public void setNum(String num)
		{
		this.number.sendKeys(num);
		}

		public WebElement fieldPassword(){
		return pin;
		}

		public void setPassword(String password)
		{
		this.pin.sendKeys(password);
		}
	
	//initiating Elements
	public PaybackPageFactory(WebDriver driver)
	{
		this.driver = driver;
		//PaybackPageFactory.initElements(driver, this);
	}

}
