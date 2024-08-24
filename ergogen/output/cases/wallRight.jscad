function xlBoardRight_extrude_10_outline_fn(){
    return new CSG.Path2D([[362.8362668,-209.5],[362.8362668,-113.7745389]]).appendArc([360.6461864,-110.8859354],{"radius":3,"clockwise":false,"large":false}).appendPoint([322.0343751,-100.059782]).appendArc([321.119757,-99.950213],{"radius":3,"clockwise":false,"large":false}).appendPoint([295.898433,-100.8309611]).appendArc([295.3122075,-100.9097802],{"radius":3,"clockwise":false,"large":false}).appendPoint([236.3156849,-114.8724976]).appendArc([235.8340304,-114.9458363],{"radius":3,"clockwise":true,"large":false}).appendPoint([213.1338716,-116.5331861]).appendArc([210.350449,-119.7351478],{"radius":3,"clockwise":false,"large":false}).appendPoint([213.1736808,-160.1092444]).appendArc([213.4244231,-161.1172304],{"radius":3,"clockwise":false,"large":false}).appendPoint([232.0234135,-203.0127052]).appendArc([232.1180194,-203.253256],{"radius":3,"clockwise":true,"large":false}).appendPoint([239.2384024,-223.9323501]).appendArc([243.0516627,-225.7922012],{"radius":3,"clockwise":false,"large":false}).appendPoint([282.2784691,-212.2853286]).appendArc([283.2763479,-212.121959],{"radius":3,"clockwise":true,"large":false}).appendPoint([336.8256835,-212.4999253]).appendArc([336.8468578,-212.5],{"radius":3,"clockwise":false,"large":false}).appendPoint([359.8362668,-212.5]).appendArc([362.8362668,-209.5],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}


function right_extrude_10_outline_fn(){
    return new CSG.Path2D([[360.8362668,-207.5],[360.8362668,-115.7983441]]).appendArc([358.6171476,-112.9017556],{"radius":3,"clockwise":false,"large":false}).appendPoint([320.1057139,-102.5195962]).appendArc([319.2201346,-102.4180122],{"radius":3,"clockwise":false,"large":false}).appendPoint([297.9698511,-103.1600884]).appendArc([297.4051008,-103.2339083],{"radius":3,"clockwise":false,"large":false}).appendPoint([238.4399187,-116.732338]).appendArc([237.9797394,-116.8006775],{"radius":3,"clockwise":true,"large":false}).appendPoint([219.2587689,-118.1097754]).appendArc([216.4753463,-121.3117371],{"radius":3,"clockwise":false,"large":false}).appendPoint([219.0294639,-157.8373224]).appendArc([219.1794251,-158.5866354],{"radius":3,"clockwise":false,"large":false}).appendPoint([234.6150211,-204.3617814]).appendArc([234.6211964,-204.3799035],{"radius":3,"clockwise":false,"large":false}).appendPoint([240.4783033,-221.3901766]).appendArc([244.2915635,-223.2500277],{"radius":3,"clockwise":false,"large":false}).appendPoint([279.7560007,-211.0386428]).appendArc([280.7133366,-210.875261],{"radius":3,"clockwise":true,"large":false}).appendPoint([338.8265864,-210.5000625]).appendArc([338.845955,-210.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([357.8362668,-210.5]).appendArc([360.8362668,-207.5],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}




                function _outerWallRight_case_fn() {
                    

                // creating part 0 of case _outerWallRight
                let _outerWallRight__part_0 = xlBoardRight_extrude_10_outline_fn();

                // make sure that rotations are relative
                let _outerWallRight__part_0_bounds = _outerWallRight__part_0.getBounds();
                let _outerWallRight__part_0_x = _outerWallRight__part_0_bounds[0].x + (_outerWallRight__part_0_bounds[1].x - _outerWallRight__part_0_bounds[0].x) / 2
                let _outerWallRight__part_0_y = _outerWallRight__part_0_bounds[0].y + (_outerWallRight__part_0_bounds[1].y - _outerWallRight__part_0_bounds[0].y) / 2
                _outerWallRight__part_0 = translate([-_outerWallRight__part_0_x, -_outerWallRight__part_0_y, 0], _outerWallRight__part_0);
                _outerWallRight__part_0 = rotate([0,0,0], _outerWallRight__part_0);
                _outerWallRight__part_0 = translate([_outerWallRight__part_0_x, _outerWallRight__part_0_y, 0], _outerWallRight__part_0);

                _outerWallRight__part_0 = translate([0,0,0], _outerWallRight__part_0);
                let result = _outerWallRight__part_0;
                
            
                    return result;
                }
            
            

                function _innerWallRight_case_fn() {
                    

                // creating part 0 of case _innerWallRight
                let _innerWallRight__part_0 = right_extrude_10_outline_fn();

                // make sure that rotations are relative
                let _innerWallRight__part_0_bounds = _innerWallRight__part_0.getBounds();
                let _innerWallRight__part_0_x = _innerWallRight__part_0_bounds[0].x + (_innerWallRight__part_0_bounds[1].x - _innerWallRight__part_0_bounds[0].x) / 2
                let _innerWallRight__part_0_y = _innerWallRight__part_0_bounds[0].y + (_innerWallRight__part_0_bounds[1].y - _innerWallRight__part_0_bounds[0].y) / 2
                _innerWallRight__part_0 = translate([-_innerWallRight__part_0_x, -_innerWallRight__part_0_y, 0], _innerWallRight__part_0);
                _innerWallRight__part_0 = rotate([0,0,0], _innerWallRight__part_0);
                _innerWallRight__part_0 = translate([_innerWallRight__part_0_x, _innerWallRight__part_0_y, 0], _innerWallRight__part_0);

                _innerWallRight__part_0 = translate([0,0,0], _innerWallRight__part_0);
                let result = _innerWallRight__part_0;
                
            
                    return result;
                }
            
            

                function wallRight_case_fn() {
                    

                // creating part 0 of case wallRight
                let wallRight__part_0 = _outerWallRight_case_fn();

                // make sure that rotations are relative
                let wallRight__part_0_bounds = wallRight__part_0.getBounds();
                let wallRight__part_0_x = wallRight__part_0_bounds[0].x + (wallRight__part_0_bounds[1].x - wallRight__part_0_bounds[0].x) / 2
                let wallRight__part_0_y = wallRight__part_0_bounds[0].y + (wallRight__part_0_bounds[1].y - wallRight__part_0_bounds[0].y) / 2
                wallRight__part_0 = translate([-wallRight__part_0_x, -wallRight__part_0_y, 0], wallRight__part_0);
                wallRight__part_0 = rotate([0,0,0], wallRight__part_0);
                wallRight__part_0 = translate([wallRight__part_0_x, wallRight__part_0_y, 0], wallRight__part_0);

                wallRight__part_0 = translate([0,0,0], wallRight__part_0);
                let result = wallRight__part_0;
                
            

                // creating part 1 of case wallRight
                let wallRight__part_1 = _innerWallRight_case_fn();

                // make sure that rotations are relative
                let wallRight__part_1_bounds = wallRight__part_1.getBounds();
                let wallRight__part_1_x = wallRight__part_1_bounds[0].x + (wallRight__part_1_bounds[1].x - wallRight__part_1_bounds[0].x) / 2
                let wallRight__part_1_y = wallRight__part_1_bounds[0].y + (wallRight__part_1_bounds[1].y - wallRight__part_1_bounds[0].y) / 2
                wallRight__part_1 = translate([-wallRight__part_1_x, -wallRight__part_1_y, 0], wallRight__part_1);
                wallRight__part_1 = rotate([0,0,0], wallRight__part_1);
                wallRight__part_1 = translate([wallRight__part_1_x, wallRight__part_1_y, 0], wallRight__part_1);

                wallRight__part_1 = translate([0,0,0], wallRight__part_1);
                result = result.subtract(wallRight__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wallRight_case_fn();
            }

        