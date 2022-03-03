
import {
  Flight
} from '../models/flight.js';

function newFlights(req, res) {
  res.render('flights/new');
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key]
  }
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.redirect("flights/new");
    res.redirect("/flights");
  });
}





function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render("flights/", {
      error: error,
      flights: flights,
    })
  })
}

export {
  newFlights as new,
  create,
  index,
}