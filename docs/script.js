function updateTimers() 
{
    const now = new Date();
    const rome = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Rome' }));

    const target = new Date(rome);
    target.setHours(18, 0, 0, 0);

    if (target <= rome) {
        target.setDate(target.getDate() + 1);
    }

    // Trova il prossimo lunedì
    while (target.getDay() !== 1) {
        target.setDate(target.getDate() + 1);
    }
    const lunediDiff = target - rome;

    // Trova il prossimo mercoledì
    target.setDate(target.getDate() + 2);
    const mercolediDiff = target - rome;

    // Trova il prossimo venerdì
    target.setDate(target.getDate() + 2);
    const venerdiDiff = target - rome;

    function formatTime(ms) {
        const hours = Math.floor(ms / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours}h ${minutes}m`;
    }

    document.getElementById('timer-lunedi').innerHTML = `
        <h3>Prossimo aggiornamento Benessere</h3>
        <p>Mancano: ${formatTime(lunediDiff)}</p>
    `;

    document.getElementById('timer-mercoledi').innerHTML = `
        <h3>Prossimo aggiornamento Finanza</h3>
        <p>Mancano: ${formatTime(mercolediDiff)}</p>
    `;

    document.getElementById('timer-venerdi').innerHTML = `
        <h3>Prossimo aggiornamento Attualità</h3>
        <p>Mancano: ${formatTime(venerdiDiff)}</p>
    `;
}

updateTimers();
setInterval(updateTimers, 60000);
