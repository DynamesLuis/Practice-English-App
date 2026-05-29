function timeAgo(dateString) {
    const now = new Date();
    const past = new Date(dateString);

    const diffMs = now - past;

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;

    if (diffMs < hour) {
        const minutes = Math.floor(diffMs / minute);

        return minutes <= 1
            ? "1 minute ago"
            : `${minutes} minutes ago`;
    }

    if (diffMs < day) {
        const hours = Math.floor(diffMs / hour);

        return hours === 1
            ? "1 hour ago"
            : `${hours} hours ago`;
    }

    if (diffMs < week) {
        const days = Math.floor(diffMs / day);

        return days === 1
            ? "1 day ago"
            : `${days} days ago`;
    }

    if (diffMs < month) {
        const weeks = Math.floor(diffMs / week);

        return weeks === 1
            ? "1 week ago"
            : `${weeks} weeks ago`;
    }

    if (diffMs < year) {
        const months = Math.floor(diffMs / month);

        return months === 1
            ? "1 month ago"
            : `${months} months ago`;
    }

    const years = Math.floor(diffMs / year);

    return years === 1
        ? "1 year ago"
        : `${years} years ago`;
}
export {
    timeAgo,
}