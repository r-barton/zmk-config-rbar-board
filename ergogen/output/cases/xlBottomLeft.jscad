function xlBoardLeft_extrude_1_outline_fn(){
    return new CSG.Path2D([[37,-209.5],[37,-113.7745389]]).appendArc([39.1900804,-110.8859354],{"radius":3,"clockwise":true,"large":false}).appendPoint([77.8018917,-100.059782]).appendArc([78.7165098,-99.950213],{"radius":3,"clockwise":true,"large":false}).appendPoint([103.9378338,-100.8309611]).appendArc([104.5240593,-100.9097802],{"radius":3,"clockwise":true,"large":false}).appendPoint([163.5205819,-114.8724976]).appendArc([164.0022364,-114.9458363],{"radius":3,"clockwise":false,"large":false}).appendPoint([186.7023952,-116.5331861]).appendArc([189.4858178,-119.7351478],{"radius":3,"clockwise":true,"large":false}).appendPoint([186.662586,-160.1092444]).appendArc([186.4118437,-161.1172304],{"radius":3,"clockwise":true,"large":false}).appendPoint([167.8128533,-203.0127052]).appendArc([167.7182474,-203.253256],{"radius":3,"clockwise":false,"large":false}).appendPoint([160.5978644,-223.9323501]).appendArc([156.7846041,-225.7922012],{"radius":3,"clockwise":true,"large":false}).appendPoint([117.5577977,-212.2853286]).appendArc([116.5599189,-212.121959],{"radius":3,"clockwise":false,"large":false}).appendPoint([63.0105833,-212.4999253]).appendArc([62.989409,-212.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([40,-212.5]).appendArc([37,-209.5],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottomLeft_case_fn() {
                    

                // creating part 0 of case xlBottomLeft
                let xlBottomLeft__part_0 = xlBoardLeft_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottomLeft__part_0_bounds = xlBottomLeft__part_0.getBounds();
                let xlBottomLeft__part_0_x = xlBottomLeft__part_0_bounds[0].x + (xlBottomLeft__part_0_bounds[1].x - xlBottomLeft__part_0_bounds[0].x) / 2
                let xlBottomLeft__part_0_y = xlBottomLeft__part_0_bounds[0].y + (xlBottomLeft__part_0_bounds[1].y - xlBottomLeft__part_0_bounds[0].y) / 2
                xlBottomLeft__part_0 = translate([-xlBottomLeft__part_0_x, -xlBottomLeft__part_0_y, 0], xlBottomLeft__part_0);
                xlBottomLeft__part_0 = rotate([0,0,0], xlBottomLeft__part_0);
                xlBottomLeft__part_0 = translate([xlBottomLeft__part_0_x, xlBottomLeft__part_0_y, 0], xlBottomLeft__part_0);

                xlBottomLeft__part_0 = translate([0,0,0], xlBottomLeft__part_0);
                let result = xlBottomLeft__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottomLeft_case_fn();
            }

        