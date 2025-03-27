const notificationSupported = 'Notification' in window

export const requestNotificationPermission = async () => {
  if (!notificationSupported) {
    console.log('Notifications not supported')
    return false
  }

  const permission = await Notification.requestPermission()
  return permission === 'granted'
}

export const sendNotification = (title, options = {}) => {
  if (!notificationSupported) return

  if (Notification.permission === 'granted') {
    const notification = new Notification(title, {
      icon: '/vite.svg',
      badge: '/vite.svg',
      ...options
    })

    notification.onclick = function() {
      window.focus()
      this.close()
    }
  }
} 