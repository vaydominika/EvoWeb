function updateNotificationCount(count) {
    var notificationBadge = document.getElementById('notificationcounter');
    if (count > 10) {
        notificationBadge.textContent = '10+';
    }
    else if (count == 0) {
        notificationBadge.className = "d-none";
    }
    else {
        notificationBadge.textContent = count;
    }
}

// Teszt: Értesítések számának frissítése
updateNotificationCount(12); // Próbáld ki különböző értékekkelkülönböző értékekkel