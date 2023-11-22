function convertTimeStringToDateTime(timeString) {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':');

    let hours24 = parseInt(hours);
    if (period === 'PM' && hours24 !== 12) {
        hours24 += 12;
    } else if (period === 'AM' && hours24 === 12) {
        hours24 = 0;
    }

    const dateTime = new Date();
    dateTime.setHours(hours24, parseInt(minutes), 0);

    return dateTime;
}
export const calculateDuration = (selectedDay,setDuration) => {

    // Simulating API response
    const apiStartTime = selectedDay?.start_time;
    const apiEndTime = selectedDay?.end_time;

    const startDate = convertTimeStringToDateTime(apiStartTime);
    const endDate = convertTimeStringToDateTime(apiEndTime);

    if (endDate < startDate) {
        endDate.setDate(endDate.getDate() + 1); // Add one day to the end date
    }

    const startTimestamp = startDate.getTime();
    const endTimestamp = endDate.getTime();

    const hourDifference = Math.abs(endTimestamp - startTimestamp) / (1000 * 60 * 60);
    setDuration(hourDifference.toFixed(0))
}
export const buildFormData = (formData, data, parentKey) => {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(key => {
            buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
    } else {
        const value = data == null ? '' : data;

        formData.append(parentKey, value);
    }
}