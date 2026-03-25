// maintenance-mode-fix.js

// Disables the maintenance mode check for admin/creator
function disableMaintenanceModeForAdmin(user) {
    const isAdmin = user.role === 'admin' || user.role === 'creator';
    if (isAdmin) {
        // Logic to disable maintenance mode
        console.log('Maintenance mode disabled for admin/creator.');
        return true;
    }
    // Logic for regular users
    console.log('Maintenance mode check remains.');
    return false;
}

// Fixes the VS friend lobby start button
function fixFriendLobbyStartButton(playerStatus) {
    if (playerStatus === 'joined') {
        // Logic to enable the start button
        console.log('VS friend lobby start button enabled.');
        return true;
    }
    // Logic to keep the button disabled
    console.log('Player has not joined. Button remains disabled.');
    return false;
}

module.exports = { disableMaintenanceModeForAdmin, fixFriendLobbyStartButton };