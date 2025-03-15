async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets");
  return await res.json();
}

async function TicketList() {
  const tickets = await getTickets();
  return (
    <div>
      {tickets.map((ticket) => {
        return (
          <div className="card my-5" key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={` pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </div>
        );
      })}
      {tickets.length === 0 && (
        <p className=" text-center">There are no priority tickets found</p>
      )}
    </div>
  );
}

export default TicketList;
