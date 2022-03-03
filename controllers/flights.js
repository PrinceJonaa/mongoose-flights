import { Flight } from '../models/flight.js';
 
function newFlights(req, res) {
  res.render('flights/new');
}
function create(req,res){
 req.body
}

export {
  newFlights as new,
  create,
}