import Ticket from '../models/Ticket.js';
export const createTicket = async (req, res) => {
    try {
        const ticket = await Ticket.create(req.body);
        res.status(201).json(ticket);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create ticket' });
    }
};

export const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tickets' });
    }
};
export const updateTicketStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updatedTicket = await Ticket.update({ status }, { where: { id } });
        res.status(200).json({ message: 'Ticket updated successfully', updatedTicket });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update ticket' });
    }
};
export const deleteTicket = async (req, res) => {
    try {
        const { id } = req.params;
        await Ticket.destroy({ where: { id } });
        res.status(200).json({ message: 'Ticket deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete ticket' });
    }
};
