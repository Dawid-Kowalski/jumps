const calculateStylePoints = (styleNotes) => {
	const minNote = Math.min.apply(null, styleNotes);
	const maxNote = Math.max.apply(null, styleNotes);
	const sumAll = styleNotes.reduce((a, b) => a + b);

	const stylePoints = sumAll - minNote - maxNote;

	return stylePoints;
}

module.exports = calculateStylePoints;