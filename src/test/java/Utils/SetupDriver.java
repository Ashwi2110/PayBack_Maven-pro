package Utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;

public class SetupDriver
{
	public static WebDriver driver;

    public static WebDriver chromeDriver()
    {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Sagar Jawale\\Desktop\\Chrome Driver\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        driver = new ChromeDriver(options);
        options.addArguments("--disable-notifications");
        driver.manage().window().maximize();
        System.out.println("Launching Chrome Browser");
        return driver;
    }

//    public static WebDriver edgeDriver()
//    {
//        System.setProperty("webdriver.edge.driver", "src/test/resources/Drivers99/msedgedriver.exe");
//        driver = new EdgeDriver();
//        driver.manage().window().maximize();
//        System.out.println("Launching Edge Browser");
//        return driver;
//    }

    public static void teardown() throws Exception
    {
    	System.out.println("i m in teardown");
    	Thread.sleep(5000);
        driver.close();
        driver.quit();
    }

}