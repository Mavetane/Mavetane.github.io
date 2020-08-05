using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;


namespace chromeopener
{
    class Program
    {
        static void Main(string[] args)
        {

            var driver = new ChromeDriver();
            driver.Navigate().GoToUrl("http://google.com");
            Console.WriteLine("Hello World!");
        }
    }
}
