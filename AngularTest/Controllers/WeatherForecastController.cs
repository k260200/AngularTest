using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularTest.Controllers
{
    [ApiController]
    [Route("api/Forecasts")]
    public class WeatherForecastController : ControllerBase
    {
        IEnumerable<WeatherForecast> _forecasts = null;

        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet]
        [Route("/GetAll")]
        public JsonResult GetAll()
        {
            if (_forecasts == null)
            {
                var rng = new Random();
                _forecasts = Enumerable.Range(1, 5).Select(index => new WeatherForecast
                {
                    Date = DateTime.Now.AddDays(index),
                    TemperatureC = rng.Next(-20, 55),
                    Summary = Summaries[rng.Next(Summaries.Length)]
                }).ToArray();
            }

            return new JsonResult(_forecasts.ToArray());
        }

        [HttpGet]
        [Route("/Get/{id}")]
        public JsonResult Get(int? id)
        {
            if (_forecasts == null)
            {
                var rng = new Random();
                _forecasts = Enumerable.Range(1, 5).Select(index => new WeatherForecast
                {
                    Date = DateTime.Now.AddDays(index),
                    TemperatureC = rng.Next(-20, 55),
                    Summary = Summaries[rng.Next(Summaries.Length)]
                }).ToArray();
            }

            if (!id.HasValue || id < 0 || id > _forecasts.Count())
                return new JsonResult(null);
            return new JsonResult(_forecasts.ElementAt(id.Value));
        }
    }
}
