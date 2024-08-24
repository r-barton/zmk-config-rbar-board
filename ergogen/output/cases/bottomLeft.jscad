function left_extrude_1_outline_fn(){
    return new CSG.Path2D([[39,-207.5],[39,-115.7983441]]).appendArc([41.2191192,-112.9017556],{"radius":3,"clockwise":true,"large":false}).appendPoint([79.7305529,-102.5195962]).appendArc([80.6161322,-102.4180122],{"radius":3,"clockwise":true,"large":false}).appendPoint([101.8664157,-103.1600884]).appendArc([102.431166,-103.2339083],{"radius":3,"clockwise":true,"large":false}).appendPoint([161.3963481,-116.732338]).appendArc([161.8565274,-116.8006775],{"radius":3,"clockwise":false,"large":false}).appendPoint([180.5774979,-118.1097754]).appendArc([183.3609205,-121.3117371],{"radius":3,"clockwise":true,"large":false}).appendPoint([180.8068029,-157.8373224]).appendArc([180.6568417,-158.5866354],{"radius":3,"clockwise":true,"large":false}).appendPoint([165.2212457,-204.3617814]).appendArc([165.2150704,-204.3799035],{"radius":3,"clockwise":true,"large":false}).appendPoint([159.3579635,-221.3901766]).appendArc([155.5447033,-223.2500277],{"radius":3,"clockwise":true,"large":false}).appendPoint([120.0802661,-211.0386428]).appendArc([119.1229302,-210.875261],{"radius":3,"clockwise":false,"large":false}).appendPoint([61.0096804,-210.5000625]).appendArc([60.9903118,-210.5],{"radius":3,"clockwise":false,"large":false}).appendPoint([42,-210.5]).appendArc([39,-207.5],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottomLeft_case_fn() {
                    

                // creating part 0 of case bottomLeft
                let bottomLeft__part_0 = left_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottomLeft__part_0_bounds = bottomLeft__part_0.getBounds();
                let bottomLeft__part_0_x = bottomLeft__part_0_bounds[0].x + (bottomLeft__part_0_bounds[1].x - bottomLeft__part_0_bounds[0].x) / 2
                let bottomLeft__part_0_y = bottomLeft__part_0_bounds[0].y + (bottomLeft__part_0_bounds[1].y - bottomLeft__part_0_bounds[0].y) / 2
                bottomLeft__part_0 = translate([-bottomLeft__part_0_x, -bottomLeft__part_0_y, 0], bottomLeft__part_0);
                bottomLeft__part_0 = rotate([0,0,0], bottomLeft__part_0);
                bottomLeft__part_0 = translate([bottomLeft__part_0_x, bottomLeft__part_0_y, 0], bottomLeft__part_0);

                bottomLeft__part_0 = translate([0,0,0], bottomLeft__part_0);
                let result = bottomLeft__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottomLeft_case_fn();
            }

        