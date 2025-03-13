import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Ticket = sequelize.define('Ticket', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    priority: { type: DataTypes.ENUM('Low', 'Medium', 'High'), defaultValue: 'Medium' },
    status: { type: DataTypes.ENUM('Open', 'In-Progress', 'Closed'), defaultValue: 'Open' },
    location: { type: DataTypes.STRING, allowNull: false },
    assignedTo: { type: DataTypes.INTEGER, allowNull: true }
}, {
    timestamps: true
});

export default Ticket;
