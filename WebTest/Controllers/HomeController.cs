using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using WebTest.Models;

namespace WebTest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var name = Dns.GetHostName();
            var ipAddress = Dns.GetHostAddresses(name);
            ViewBag.Ip = ipAddress[2];
            return View();
        }

        public ActionResult Get()
        {
            var list = new List<Person> {
                new Person { Id = 1, Age = 33, Name = "michael berezin", Qa = false } ,
                new Person { Id = 2, Age =36, Name = "ofir benyair", Qa = false },
                new Person { Id = 3, Age = 30, Name = "moria sharbny", Qa = false },
                new Person { Id = 4, Age = 31, Name = "zohara mizrahi", Qa = true },
                new Person { Id = 5, Age = 34, Name = "anat guez", Qa = true },
                new Person { Id = 5, Age = 34, Name = "shira david", Qa = true }
            };

            var temp = list.Where(p => p.Age > 31)
                .Where(p => !p.Qa)
                .Select(p => p.Name).
                FirstOrDefault(p => p.StartsWith("m"));

            return Json(temp,JsonRequestBehavior.AllowGet);

        }

    }
}