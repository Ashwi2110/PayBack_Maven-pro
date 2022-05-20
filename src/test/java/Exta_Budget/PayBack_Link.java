package Exta_Budget;

//Get & print size of available links on PayBack
//conecting to pages


import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class PayBack_Link {
	public static void main(String []args) throws InterruptedException{
		//open Chorme driver & star URL
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Sagar Jawale\\Desktop\\Chrome Driver\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.payback.in/");
		//tagas a

		//Get all list on the site
		//webElements_working with mult obj hv comm prop_TagNam

		List<WebElement> ls=(List<WebElement>) driver.findElements(By.tagName("a"));

		//print all size of link
		int sz=ls.size();
		System.out.println("Total link available"+sz);

		//for all link

		//for(int i=0;i<=sz;i++){

		for(int i=0;i<sz;i++){

			//for numbring 
			System.out.print((i+1)+ " ");

			//value from ls.getting 
			//System.out.println(ls.get(i));
			System.out.println(ls.get(i).getText());
		}

		// for perticular nuber of link

		ls.get(158).click();



		//		driver.get("https://9172137396:0343@www.payback.in/");
		//		driver.findElement(By.linkText("Allow")).click();
		//		String text= driver.findElement(By.cssSelector("b")).getText();
		//		System.out.println(text);
		//		driver.findElement(By.linkText("Allow")).click();
		//driver.findElement(By.linkText("Block")).click();












		//	ls.get(2).click();
		//	ls.get(3).click();
		//	ls.get(4).click();
		//	ls.get(5).click();
		//	ls.get(6).click();
		//	ls.get(7).click();
		//	ls.get(8).click();
		//	ls.get(9).click();
		//	ls.get(10).click();
		//	
		//	ls.get(11).click();
		//	ls.get(12).click();
		//	ls.get(13).click();
		//	ls.get(14).click();
		//	ls.get(15).click();
		//	ls.get(16).click();
		//	ls.get(17).click();
		//	ls.get(18).click();
		//	ls.get(19).click();
		//	ls.get(20).click();
		//	
		//	ls.get(21).click();
		//	ls.get(22).click();
		//	ls.get(23).click();
		//	ls.get(24).click();
		//	ls.get(25).click();
		//	ls.get(26).click();
		//	ls.get(27).click();
		//	ls.get(28).click();
		//	ls.get(29).click();
		//	ls.get(30).click();
		//	
		//	ls.get(31).click();
		//	ls.get(32).click();
		//	ls.get(33).click();
		//	ls.get(34).click();
		//	ls.get(35).click();
		//	ls.get(36).click();
		//	ls.get(37).click();
		//	ls.get(38).click();
		//	ls.get(39).click();
		//	ls.get(40).click();
		//	
		//	ls.get(41).click();
		//	ls.get(42).click();
		//	ls.get(43).click();
		//	ls.get(44).click();
		//	ls.get(45).click();
		//	ls.get(46).click();
		//	ls.get(47).click();
		//	ls.get(48).click();
		//	ls.get(49).click();
		//	ls.get(50).click();
		//	
		//	ls.get(51).click();
		//	ls.get(52).click();
		//	ls.get(53).click();
		//	ls.get(54).click();
		//	ls.get(55).click();
		//	ls.get(56).click();
		//	ls.get(57).click();
		//	ls.get(58).click();
		//	ls.get(59).click();
		//	ls.get(60).click();
		//	
		//	ls.get(61).click();
		//	ls.get(62).click();
		//	ls.get(63).click();
		//	ls.get(64).click();
		//	ls.get(65).click();
		//	ls.get(66).click();
		//	ls.get(67).click();
		//	ls.get(68).click();
		//	ls.get(69).click();
		//	ls.get(70).click();
		//	
		//	ls.get(71).click();
		//	ls.get(72).click();
		//	ls.get(73).click();
		//	ls.get(74).click();
		//	ls.get(75).click();
		//	ls.get(76).click();
		//	ls.get(77).click();
		//	ls.get(78).click();
		//	ls.get(79).click();
		//	ls.get(80).click();
		//	
		//	ls.get(81).click();
		//	ls.get(82).click();
		//	ls.get(83).click();
		//	ls.get(84).click();
		//	ls.get(85).click();
		//	ls.get(86).click();
		//	ls.get(87).click();
		//	ls.get(88).click();
		//	ls.get(89).click();
		//	ls.get(90).click();
		//	
		//	ls.get(91).click();
		//	ls.get(92).click();
		//	ls.get(93).click();
		//	ls.get(94).click();
		//	ls.get(95).click();
		//	ls.get(96).click();
		//	ls.get(97).click();
		//	ls.get(98).click();
		//	ls.get(99).click();
		//	ls.get(100).click();
		//	
		//	ls.get(101).click();
		//	ls.get(102).click();
		//ls.get(103).click();
		//	ls.get(104).click();
		//	ls.get(105).click();
		//	ls.get(106).click();
		//	ls.get(107).click();
		//	ls.get(108).click();
		//	ls.get(109).click();
		//	ls.get(110).click();
		//	
		//	ls.get(111).click();
		//	ls.get(112).click();
		//	ls.get(113).click();
		//	ls.get(114).click();
		//	ls.get(115).click();
		//	ls.get(116).click();
		//	ls.get(117).click();
		//	ls.get(118).click();
		//	ls.get(119).click();
		//	ls.get(120).click();
		//	
		//	ls.get(121).click();
		//	ls.get(122).click();
		//	ls.get(123).click();
		//	ls.get(124).click();
		//	ls.get(125).click();
		//	ls.get(126).click();
		//	ls.get(127).click();
		//	ls.get(128).click();
		//	ls.get(129).click();
		//	ls.get(130).click();
		//	
		//	ls.get(131).click();
		//	ls.get(132).click();
		//	ls.get(133).click();
		//	ls.get(134).click();
		//	ls.get(135).click();
		//	ls.get(136).click();
		//	ls.get(137).click();
		//	ls.get(138).click();
		//	ls.get(139).click();
		//	ls.get(140).click();
		//	
		//	ls.get(141).click();
		//	ls.get(142).click();
		//	ls.get(143).click();
		//	ls.get(144).click();
		//	ls.get(145).click();
		//	ls.get(146).click();
		//	ls.get(147).click();
		//	ls.get(148).click();
		//	ls.get(149).click();
		//	ls.get(150).click();
		//	
		//	ls.get(151).click();
		//	ls.get(152).click();
		//	ls.get(153).click();
		//	ls.get(154).click();
		//	ls.get(155).click();
		//	ls.get(156).click();
		//	ls.get(157).click();
		//	ls.get(158).click();
		//	ls.get(159).click();
		//	ls.get(160).click();
		//	ls.get(161).click();
		//	ls.get(162).click();
		//	ls.get(163).click();

	}
}

