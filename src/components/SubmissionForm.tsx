import { useState } from "react";

function SubmissionForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  const [selectedOption, setSelectedOption] = useState<string>("");
  const [request, setRequest] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, contact, request, selectedOption);
    // Add your form submission logic here
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setContact("");
   
    setSelectedOption("");
    setRequest("");
  };

  return (
    <div className=" bg-gradient-to-br from-gray-700 to-gray-950 border-gray-600 border-2 drop-shadow-lg shadow-gray-900  submissionForm">
      <fieldset  className="">
        <form onSubmit={handleSubmit}>
          <label className="flex" htmlFor="name">Name*</label>
          <input className="text-gray-900 bg-gradient-to-t from-gray-500 to-gray-200"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />

          <label htmlFor="email">Enter Email* </label>
          <input className="text-gray-900 bg-gradient-to-t from-gray-500 to-gray-200"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />

          <label htmlFor="contact">Contact*</label>
          <input  className="text-gray-900 bg-gradient-to-t from-gray-500 to-gray-200"
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />

          <label  htmlFor="select">Select your choice</label>
          <select className="text-gray-900 bg-gradient-to-t from-gray-500 to-gray-200"
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled>
             
            </option>
            <optgroup label="Commission Request ">
              <option value="1">Painting</option>
              <option value="2">Design</option>
              <option value="3">Printmaking</option>
            </optgroup>
            <optgroup label="Live Booking Request">
              <option value="4">Live Painting</option>
              <option value="5">DJ Resquest</option>
              <option value="6">Demostration</option>
            
            </optgroup>
          </select>

          <label className="justify-center text-center" htmlFor="request">Request</label>
          <textarea className="text-center text-gray-900 bg-gradient-to-t from-gray-500 to-gray-200"
            name="request"
            id="request"
            cols={40}
            rows={10}
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            placeholder="Request a quote for a custom piece or contact for live painting"
            required
          ></textarea>
          <div className="flex justify-evenly h-20 mb-8">
          <button className="text-gray-700 bg-gradient-to-t from-gray-500 to-gray-300 border-4 border-indigo-900 rounded-4xl flex-1" type="button" onClick={handleReset}>
            Reset
          </button>
          <button className="text-gray-700 bg-gradient-to-t from-gray-500 to-gray-300 border-4 border-indigo-900 rounded-4xl flex-1 " type="submit">Submit</button>
          </div>  
        </form>
      </fieldset>
    </div>
  );
}

export default SubmissionForm;
