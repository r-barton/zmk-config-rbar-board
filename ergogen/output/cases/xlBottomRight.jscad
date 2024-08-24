function xlBoardRight_extrude_1_outline_fn(){
    return new CSG.Path2D([[362.8362668,-209.5],[362.8362668,-113.7745389]]).appendArc([360.6461864,-110.8859354],{"radius":3,"clockwise":false,"large":false}).appendPoint([322.0343751,-100.059782]).appendArc([321.119757,-99.950213],{"radius":3,"clockwise":false,"large":false}).appendPoint([295.898433,-100.8309611]).appendArc([295.3122075,-100.9097802],{"radius":3,"clockwise":false,"large":false}).appendPoint([236.3156849,-114.8724976]).appendArc([235.8340304,-114.9458363],{"radius":3,"clockwise":true,"large":false}).appendPoint([213.1338716,-116.5331861]).appendArc([210.350449,-119.7351478],{"radius":3,"clockwise":false,"large":false}).appendPoint([213.1736808,-160.1092444]).appendArc([213.4244231,-161.1172304],{"radius":3,"clockwise":false,"large":false}).appendPoint([232.0234135,-203.0127052]).appendArc([232.1180194,-203.253256],{"radius":3,"clockwise":true,"large":false}).appendPoint([239.2384024,-223.9323501]).appendArc([243.0516627,-225.7922012],{"radius":3,"clockwise":false,"large":false}).appendPoint([282.2784691,-212.2853286]).appendArc([283.2763479,-212.121959],{"radius":3,"clockwise":true,"large":false}).appendPoint([336.8256835,-212.4999253]).appendArc([336.8468578,-212.5],{"radius":3,"clockwise":false,"large":false}).appendPoint([359.8362668,-212.5]).appendArc([362.8362668,-209.5],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottomRight_case_fn() {
                    

                // creating part 0 of case xlBottomRight
                let xlBottomRight__part_0 = xlBoardRight_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottomRight__part_0_bounds = xlBottomRight__part_0.getBounds();
                let xlBottomRight__part_0_x = xlBottomRight__part_0_bounds[0].x + (xlBottomRight__part_0_bounds[1].x - xlBottomRight__part_0_bounds[0].x) / 2
                let xlBottomRight__part_0_y = xlBottomRight__part_0_bounds[0].y + (xlBottomRight__part_0_bounds[1].y - xlBottomRight__part_0_bounds[0].y) / 2
                xlBottomRight__part_0 = translate([-xlBottomRight__part_0_x, -xlBottomRight__part_0_y, 0], xlBottomRight__part_0);
                xlBottomRight__part_0 = rotate([0,0,0], xlBottomRight__part_0);
                xlBottomRight__part_0 = translate([xlBottomRight__part_0_x, xlBottomRight__part_0_y, 0], xlBottomRight__part_0);

                xlBottomRight__part_0 = translate([0,0,0], xlBottomRight__part_0);
                let result = xlBottomRight__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottomRight_case_fn();
            }

        