$(document).ready(function() {
    
    test = CircleBar();
    
    test.init(
        "#skills", 
        { 
            text: "test",
            lineColor: "#1d8eff",
            lineBgColor: "rgb(150, 203, 255)",
            backgroundColor: "white",
            lineWidth: "15",
            lineWidthHover: "7px",
            bgLineWidth: "10",
            bgLineWidthHover: "4",
            lineDuration: "2s",
            lineDelay: "1s",
            diameter: "300",
            viewPourcentage: true,
            textCSS: {
                color: "red"
            },
            textHoverCSS: {
                color: "pink"
            },
            pourcentageCSS: {
                color: "red"
            },
            pourcentageHoverCSS: {
                color: "pink"
            }
        },
        50);
});