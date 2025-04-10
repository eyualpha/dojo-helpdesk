import { notFound } from "next/navigation";

export const dynamicParams = true;
export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();
  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}
async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 0,
    },
  });
  if (!res.ok) {
    return notFound();
  }

  return await res.json();
}

async function TicketDetail({ params }) {
  const ticket = await getTicket(params.id);
  const id = params.id;
  return (
    <main>
      <nav>
        <h3>Ticket Detail</h3>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by: {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}

export default TicketDetail;
