// code for descriptive statistics

class MathOperations {
    static pi = 3.14159;

    // A static method that calculates the area of a circle
    static areaOfCircle(radius) {
        return this.pi * radius * radius;
    }

// Accessing the static property
console.log(MathOperations.pi); 

// Accessing the static method
console.log(MathOperations.areaOfCircle(5)); 





class DescriptiveStatistics {

    // Measures of central tendency
    static mean(data) {
        return data.reduce((a, b) => a + b, 0) / data.length;
    }

    static median(data) {
        const sorted = [...data].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }

    static mode(data) {
        const modeMap = {};
        let maxFreq = 0, modes = [];
        data.forEach(number => {
            modeMap[number] = (modeMap[number] || 0) + 1;
            if (modeMap[number] > maxFreq) {
                modes = [number];
                maxFreq = modeMap[number];
            } else if (modeMap[number] === maxFreq) {
                modes.push(number);
                maxFreq = modeMap[number];
            }
        });
        return modes;
    }

    // Measures of dispersion
    static variance(data) {
        const dataMean = this.mean(data);
        return this.mean(data.map(num => (num - dataMean) ** 2));
    }

    static standardDeviation(data) {
        const dataVariance = this.variance(data);
        return Math.sqrt(dataVariance);
    }

    static range(data) {
        return Math.max(...data) - Math.min(...data);
    }

    static quartiles(data) {
        const sorted = [...data].sort((a, b) => a - b);
        return {
            Q1: this.median(sorted.slice(0, Math.floor(sorted.length / 2))),
            Q2: this.median(sorted),
            Q3: this.median(sorted.slice(Math.ceil(sorted.length / 2))),
        };
    }

    static iqr(data) {
        const quartiles = this.quartiles(data);
        return quartiles.Q3 - quartiles.Q1;
    }
}


const data = [1, 2, 3, 4, 5, 5, 6, 7, 8];
console.log(`Mean: ${DescriptiveStatistics.mean(data)}`);
console.log(`Median: ${DescriptiveStatistics.median(data)}`);
console.log(`Mode: ${DescriptiveStatistics.mode(data)}`);
console.log(`Variance: ${DescriptiveStatistics.variance(data)}`);
console.log(`Standard Deviation: ${DescriptiveStatistics.standardDeviation(data)}`);
console.log(`Range: ${DescriptiveStatistics.range(data)}`);
console.log(`Quartiles: ${JSON.stringify(DescriptiveStatistics.quartiles(data))}`);
console.log(`Interquartile Range: ${DescriptiveStatistics.iqr(data)}`);

