import React, { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'React Basics', subject: 'Web Dev', status: 'Pending' },
    { id: 2, title: 'Python Basics', subject: 'Data Science', status: 'Pending' }
  ]);
  const [input, setInput] = useState({ title: '', subject: '' });

  const addTask = () => {
    if (!input.title || !input.subject) return;
    setTasks([...tasks, { id: Date.now(), ...input, status: 'Pending' }]);
    setInput({ title: '', subject: '' });
  };

  const updateStatus = (id, status) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status } : t));
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto', fontFamily: 'sans-serif', backgroundColor: '#f9fafb', borderRadius: '15px' }}>
      <h2 style={{ textAlign: 'center', color: '#1e3a8a' }}>Student Assignment Submission Tracker</h2>
      
      {/* Input Field */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '30px' }}>
        <input placeholder="Assignment Title" value={input.title} onChange={(e) => setInput({...input, title: e.target.value})} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
        <input placeholder="Subject" value={input.subject} onChange={(e) => setInput({...input, subject: e.target.value})} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
        <button onClick={addTask} style={{ padding: '10px 20px', backgroundColor: '#2563eb', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Add</button>
      </div>

      {/* Task List */}
      {tasks.map(task => (
        <div key={task.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: 'white', marginBottom: '10px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <div>
            <strong style={{ display: 'block' }}>{task.title}</strong>
            <small style={{ color: '#666' }}>{task.subject}</small>
          </div>
          <span style={{ padding: '5px 12px', borderRadius: '20px', fontSize: '12px', backgroundColor: task.status === 'Submitted' ? '#dcfce7' : '#fee2e2' }}>
            {task.status}
          </span>
          <div>
            <button onClick={() => updateStatus(task.id, 'Submitted')} style={{ marginRight: '5px', cursor: 'pointer' }}>✔</button>
            <button onClick={() => updateStatus(task.id, 'Late')} style={{ cursor: 'pointer' }}>✘</button>
          </div>
        </div>
      ))}
    </div>
  );
}