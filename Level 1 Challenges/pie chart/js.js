let ctx = document.querySelector("canvas").getContext("2d");

    const results = [
        {country: "Netherlands", total: 799, shade: "#fcca46"},
        {country: "Bulgaria", total: 578, shade: "#a1c181"},
        {country: "Aruba", total:332, shade: "#fe7f2d"},
        {country: "Romania", total: 195, shade: "#619b8a"}
    ];

    let sum = 0;
    let totalNumberOfStudents = results.reduce((sum, {total}) => sum + total, 0);
    let currentAngle = 0;

    for (let countryValue of results) {
        //calculating the angle the slice (portion) will take in the chart
        let portionAngle = (countryValue.total / totalNumberOfStudents) * 2 * Math.PI;
        //drawing an arc and a line to the center to differentiate the slice from the rest
        ctx.beginPath(); //starts path
        ctx.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);//creates a circular arc centered at (x, y) with
                                                                        //  a set radius(3rd param). The path starts at startAngle(4th param), 
                                                                        //ends at endAngle(5th param), and travels in the direction given
                                                                        // by the last parameter in the brackets(the default is
                                                                        // clockwise and can be skipped.)
        currentAngle += portionAngle; 
        ctx.lineTo(100, 100);
        //filling the slices with the corresponding country's color
        ctx.fillStyle = countryValue.shade;
        ctx.fill();
    }