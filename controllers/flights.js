
import {  Flight } from '../models/flight.js';

function newFlight(req, res) {
  const newFlight = new Flight();
  const dt = newFlight.departs;
  const departsDate = dt.toISOString().slice(0, 16);
  res.render("flights/new", {
    departsDate,
    title: "Add Flight",
  });
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

function update(req, res) {
  Flight.findByIdAndUpdate(req.params.id, req.body, function (err, flight) {
    res.redirect(`/flights/${flight._id}`);
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render("flights/show", {
      flight: flight,
      title: "Flight Detail",
    });
  });
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function (err, flight) {
    res.redirect("/flights");
  });
}


function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render("flights/index", {
      error: error,
      flights: flights,
      title: "All Flights",
    });
  });
}

function edit(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render("flights/edit", {
      flight,
      err,
      title: "Edit Your Flight",
    });
  });
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  update,
  edit,
}