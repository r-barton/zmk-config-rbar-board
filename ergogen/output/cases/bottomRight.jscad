function right_extrude_1_outline_fn(){
    return new CSG.Path2D([[360.8362668,-207.5],[360.8362668,-115.7983441]]).appendArc([358.6171476,-112.9017556],{"radius":3,"clockwise":false,"large":false}).appendPoint([320.1057139,-102.5195962]).appendArc([319.2201346,-102.4180122],{"radius":3,"clockwise":false,"large":false}).appendPoint([297.9698511,-103.1600884]).appendArc([297.4051008,-103.2339083],{"radius":3,"clockwise":false,"large":false}).appendPoint([238.4399187,-116.732338]).appendArc([237.9797394,-116.8006775],{"radius":3,"clockwise":true,"large":false}).appendPoint([219.2587689,-118.1097754]).appendArc([216.4753463,-121.3117371],{"radius":3,"clockwise":false,"large":false}).appendPoint([219.0294639,-157.8373224]).appendArc([219.1794251,-158.5866354],{"radius":3,"clockwise":false,"large":false}).appendPoint([234.6150211,-204.3617814]).appendArc([234.6211964,-204.3799035],{"radius":3,"clockwise":false,"large":false}).appendPoint([240.4783033,-221.3901766]).appendArc([244.2915635,-223.2500277],{"radius":3,"clockwise":false,"large":false}).appendPoint([279.7560007,-211.0386428]).appendArc([280.7133366,-210.875261],{"radius":3,"clockwise":true,"large":false}).appendPoint([338.8265864,-210.5000625]).appendArc([338.845955,-210.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([357.8362668,-210.5]).appendArc([360.8362668,-207.5],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottomRight_case_fn() {
                    

                // creating part 0 of case bottomRight
                let bottomRight__part_0 = right_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottomRight__part_0_bounds = bottomRight__part_0.getBounds();
                let bottomRight__part_0_x = bottomRight__part_0_bounds[0].x + (bottomRight__part_0_bounds[1].x - bottomRight__part_0_bounds[0].x) / 2
                let bottomRight__part_0_y = bottomRight__part_0_bounds[0].y + (bottomRight__part_0_bounds[1].y - bottomRight__part_0_bounds[0].y) / 2
                bottomRight__part_0 = translate([-bottomRight__part_0_x, -bottomRight__part_0_y, 0], bottomRight__part_0);
                bottomRight__part_0 = rotate([0,0,0], bottomRight__part_0);
                bottomRight__part_0 = translate([bottomRight__part_0_x, bottomRight__part_0_y, 0], bottomRight__part_0);

                bottomRight__part_0 = translate([0,0,0], bottomRight__part_0);
                let result = bottomRight__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottomRight_case_fn();
            }

        