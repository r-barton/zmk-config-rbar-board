function standoffLeft_extrude_8_outline_fn(){
    return CAG.circle({"center":[155.8267473,-197.8584849],"radius":3.5})
.union(
    CAG.circle({"center":[140.3471269,-134.3429899],"radius":3.5})
).union(
    CAG.circle({"center":[99.506888,-165.0628728],"radius":3.5})
).union(
    CAG.circle({"center":[59,-189.8],"radius":3.5})
).union(
    CAG.circle({"center":[59,-132.5],"radius":3.5})
).extrude({ offset: [0, 0, 8] });
}


function mountingLeft_extrude_8_outline_fn(){
    return CAG.circle({"center":[155.8267473,-197.8584849],"radius":1.5})
.union(
    CAG.circle({"center":[140.3471269,-134.3429899],"radius":1.5})
).union(
    CAG.circle({"center":[99.506888,-165.0628728],"radius":1.5})
).union(
    CAG.circle({"center":[59,-189.8],"radius":1.5})
).union(
    CAG.circle({"center":[59,-132.5],"radius":1.5})
).extrude({ offset: [0, 0, 8] });
}


function xlBoardLeft_extrude_1_outline_fn(){
    return new CSG.Path2D([[37,-209.5],[37,-113.7745389]]).appendArc([39.1900804,-110.8859354],{"radius":3,"clockwise":true,"large":false}).appendPoint([77.8018917,-100.059782]).appendArc([78.7165098,-99.950213],{"radius":3,"clockwise":true,"large":false}).appendPoint([103.9378338,-100.8309611]).appendArc([104.5240593,-100.9097802],{"radius":3,"clockwise":true,"large":false}).appendPoint([163.5205819,-114.8724976]).appendArc([164.0022364,-114.9458363],{"radius":3,"clockwise":false,"large":false}).appendPoint([186.7023952,-116.5331861]).appendArc([189.4858178,-119.7351478],{"radius":3,"clockwise":true,"large":false}).appendPoint([186.662586,-160.1092444]).appendArc([186.4118437,-161.1172304],{"radius":3,"clockwise":true,"large":false}).appendPoint([167.8128533,-203.0127052]).appendArc([167.7182474,-203.253256],{"radius":3,"clockwise":false,"large":false}).appendPoint([160.5978644,-223.9323501]).appendArc([156.7846041,-225.7922012],{"radius":3,"clockwise":true,"large":false}).appendPoint([117.5577977,-212.2853286]).appendArc([116.5599189,-212.121959],{"radius":3,"clockwise":false,"large":false}).appendPoint([63.0105833,-212.4999253]).appendArc([62.989409,-212.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([40,-212.5]).appendArc([37,-209.5],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function xlBoardLeft_extrude_10_outline_fn(){
    return new CSG.Path2D([[37,-209.5],[37,-113.7745389]]).appendArc([39.1900804,-110.8859354],{"radius":3,"clockwise":true,"large":false}).appendPoint([77.8018917,-100.059782]).appendArc([78.7165098,-99.950213],{"radius":3,"clockwise":true,"large":false}).appendPoint([103.9378338,-100.8309611]).appendArc([104.5240593,-100.9097802],{"radius":3,"clockwise":true,"large":false}).appendPoint([163.5205819,-114.8724976]).appendArc([164.0022364,-114.9458363],{"radius":3,"clockwise":false,"large":false}).appendPoint([186.7023952,-116.5331861]).appendArc([189.4858178,-119.7351478],{"radius":3,"clockwise":true,"large":false}).appendPoint([186.662586,-160.1092444]).appendArc([186.4118437,-161.1172304],{"radius":3,"clockwise":true,"large":false}).appendPoint([167.8128533,-203.0127052]).appendArc([167.7182474,-203.253256],{"radius":3,"clockwise":false,"large":false}).appendPoint([160.5978644,-223.9323501]).appendArc([156.7846041,-225.7922012],{"radius":3,"clockwise":true,"large":false}).appendPoint([117.5577977,-212.2853286]).appendArc([116.5599189,-212.121959],{"radius":3,"clockwise":false,"large":false}).appendPoint([63.0105833,-212.4999253]).appendArc([62.989409,-212.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([40,-212.5]).appendArc([37,-209.5],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}


function left_extrude_10_outline_fn(){
    return new CSG.Path2D([[39,-207.5],[39,-115.7983441]]).appendArc([41.2191192,-112.9017556],{"radius":3,"clockwise":true,"large":false}).appendPoint([79.7305529,-102.5195962]).appendArc([80.6161322,-102.4180122],{"radius":3,"clockwise":true,"large":false}).appendPoint([101.8664157,-103.1600884]).appendArc([102.431166,-103.2339083],{"radius":3,"clockwise":true,"large":false}).appendPoint([161.3963481,-116.732338]).appendArc([161.8565274,-116.8006775],{"radius":3,"clockwise":false,"large":false}).appendPoint([180.5774979,-118.1097754]).appendArc([183.3609205,-121.3117371],{"radius":3,"clockwise":true,"large":false}).appendPoint([180.8068029,-157.8373224]).appendArc([180.6568417,-158.5866354],{"radius":3,"clockwise":true,"large":false}).appendPoint([165.2212457,-204.3617814]).appendArc([165.2150704,-204.3799035],{"radius":3,"clockwise":true,"large":false}).appendPoint([159.3579635,-221.3901766]).appendArc([155.5447033,-223.2500277],{"radius":3,"clockwise":true,"large":false}).appendPoint([120.0802661,-211.0386428]).appendArc([119.1229302,-210.875261],{"radius":3,"clockwise":false,"large":false}).appendPoint([61.0096804,-210.5000625]).appendArc([60.9903118,-210.5],{"radius":3,"clockwise":false,"large":false}).appendPoint([42,-210.5]).appendArc([39,-207.5],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}




                function _standoffsLeft_case_fn() {
                    

                // creating part 0 of case _standoffsLeft
                let _standoffsLeft__part_0 = standoffLeft_extrude_8_outline_fn();

                // make sure that rotations are relative
                let _standoffsLeft__part_0_bounds = _standoffsLeft__part_0.getBounds();
                let _standoffsLeft__part_0_x = _standoffsLeft__part_0_bounds[0].x + (_standoffsLeft__part_0_bounds[1].x - _standoffsLeft__part_0_bounds[0].x) / 2
                let _standoffsLeft__part_0_y = _standoffsLeft__part_0_bounds[0].y + (_standoffsLeft__part_0_bounds[1].y - _standoffsLeft__part_0_bounds[0].y) / 2
                _standoffsLeft__part_0 = translate([-_standoffsLeft__part_0_x, -_standoffsLeft__part_0_y, 0], _standoffsLeft__part_0);
                _standoffsLeft__part_0 = rotate([0,0,0], _standoffsLeft__part_0);
                _standoffsLeft__part_0 = translate([_standoffsLeft__part_0_x, _standoffsLeft__part_0_y, 0], _standoffsLeft__part_0);

                _standoffsLeft__part_0 = translate([0,0,0], _standoffsLeft__part_0);
                let result = _standoffsLeft__part_0;
                
            
                    return result;
                }
            
            

                function _holesLeft_case_fn() {
                    

                // creating part 0 of case _holesLeft
                let _holesLeft__part_0 = mountingLeft_extrude_8_outline_fn();

                // make sure that rotations are relative
                let _holesLeft__part_0_bounds = _holesLeft__part_0.getBounds();
                let _holesLeft__part_0_x = _holesLeft__part_0_bounds[0].x + (_holesLeft__part_0_bounds[1].x - _holesLeft__part_0_bounds[0].x) / 2
                let _holesLeft__part_0_y = _holesLeft__part_0_bounds[0].y + (_holesLeft__part_0_bounds[1].y - _holesLeft__part_0_bounds[0].y) / 2
                _holesLeft__part_0 = translate([-_holesLeft__part_0_x, -_holesLeft__part_0_y, 0], _holesLeft__part_0);
                _holesLeft__part_0 = rotate([0,0,0], _holesLeft__part_0);
                _holesLeft__part_0 = translate([_holesLeft__part_0_x, _holesLeft__part_0_y, 0], _holesLeft__part_0);

                _holesLeft__part_0 = translate([0,0,0], _holesLeft__part_0);
                let result = _holesLeft__part_0;
                
            
                    return result;
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
            
            

                function wallLeft_case_fn() {
                    

                // creating part 0 of case wallLeft
                let wallLeft__part_0 = _outerWallLeft_case_fn();

                // make sure that rotations are relative
                let wallLeft__part_0_bounds = wallLeft__part_0.getBounds();
                let wallLeft__part_0_x = wallLeft__part_0_bounds[0].x + (wallLeft__part_0_bounds[1].x - wallLeft__part_0_bounds[0].x) / 2
                let wallLeft__part_0_y = wallLeft__part_0_bounds[0].y + (wallLeft__part_0_bounds[1].y - wallLeft__part_0_bounds[0].y) / 2
                wallLeft__part_0 = translate([-wallLeft__part_0_x, -wallLeft__part_0_y, 0], wallLeft__part_0);
                wallLeft__part_0 = rotate([0,0,0], wallLeft__part_0);
                wallLeft__part_0 = translate([wallLeft__part_0_x, wallLeft__part_0_y, 0], wallLeft__part_0);

                wallLeft__part_0 = translate([0,0,0], wallLeft__part_0);
                let result = wallLeft__part_0;
                
            

                // creating part 1 of case wallLeft
                let wallLeft__part_1 = _innerWallLeft_case_fn();

                // make sure that rotations are relative
                let wallLeft__part_1_bounds = wallLeft__part_1.getBounds();
                let wallLeft__part_1_x = wallLeft__part_1_bounds[0].x + (wallLeft__part_1_bounds[1].x - wallLeft__part_1_bounds[0].x) / 2
                let wallLeft__part_1_y = wallLeft__part_1_bounds[0].y + (wallLeft__part_1_bounds[1].y - wallLeft__part_1_bounds[0].y) / 2
                wallLeft__part_1 = translate([-wallLeft__part_1_x, -wallLeft__part_1_y, 0], wallLeft__part_1);
                wallLeft__part_1 = rotate([0,0,0], wallLeft__part_1);
                wallLeft__part_1 = translate([wallLeft__part_1_x, wallLeft__part_1_y, 0], wallLeft__part_1);

                wallLeft__part_1 = translate([0,0,0], wallLeft__part_1);
                result = result.subtract(wallLeft__part_1);
                
            
                    return result;
                }
            
            

                function _outerWallLeft_case_fn() {
                    

                // creating part 0 of case _outerWallLeft
                let _outerWallLeft__part_0 = xlBoardLeft_extrude_10_outline_fn();

                // make sure that rotations are relative
                let _outerWallLeft__part_0_bounds = _outerWallLeft__part_0.getBounds();
                let _outerWallLeft__part_0_x = _outerWallLeft__part_0_bounds[0].x + (_outerWallLeft__part_0_bounds[1].x - _outerWallLeft__part_0_bounds[0].x) / 2
                let _outerWallLeft__part_0_y = _outerWallLeft__part_0_bounds[0].y + (_outerWallLeft__part_0_bounds[1].y - _outerWallLeft__part_0_bounds[0].y) / 2
                _outerWallLeft__part_0 = translate([-_outerWallLeft__part_0_x, -_outerWallLeft__part_0_y, 0], _outerWallLeft__part_0);
                _outerWallLeft__part_0 = rotate([0,0,0], _outerWallLeft__part_0);
                _outerWallLeft__part_0 = translate([_outerWallLeft__part_0_x, _outerWallLeft__part_0_y, 0], _outerWallLeft__part_0);

                _outerWallLeft__part_0 = translate([0,0,0], _outerWallLeft__part_0);
                let result = _outerWallLeft__part_0;
                
            
                    return result;
                }
            
            

                function _innerWallLeft_case_fn() {
                    

                // creating part 0 of case _innerWallLeft
                let _innerWallLeft__part_0 = left_extrude_10_outline_fn();

                // make sure that rotations are relative
                let _innerWallLeft__part_0_bounds = _innerWallLeft__part_0.getBounds();
                let _innerWallLeft__part_0_x = _innerWallLeft__part_0_bounds[0].x + (_innerWallLeft__part_0_bounds[1].x - _innerWallLeft__part_0_bounds[0].x) / 2
                let _innerWallLeft__part_0_y = _innerWallLeft__part_0_bounds[0].y + (_innerWallLeft__part_0_bounds[1].y - _innerWallLeft__part_0_bounds[0].y) / 2
                _innerWallLeft__part_0 = translate([-_innerWallLeft__part_0_x, -_innerWallLeft__part_0_y, 0], _innerWallLeft__part_0);
                _innerWallLeft__part_0 = rotate([0,0,0], _innerWallLeft__part_0);
                _innerWallLeft__part_0 = translate([_innerWallLeft__part_0_x, _innerWallLeft__part_0_y, 0], _innerWallLeft__part_0);

                _innerWallLeft__part_0 = translate([0,0,0], _innerWallLeft__part_0);
                let result = _innerWallLeft__part_0;
                
            
                    return result;
                }
            
            

                function caseLeft_case_fn() {
                    

                // creating part 0 of case caseLeft
                let caseLeft__part_0 = _standoffsLeft_case_fn();

                // make sure that rotations are relative
                let caseLeft__part_0_bounds = caseLeft__part_0.getBounds();
                let caseLeft__part_0_x = caseLeft__part_0_bounds[0].x + (caseLeft__part_0_bounds[1].x - caseLeft__part_0_bounds[0].x) / 2
                let caseLeft__part_0_y = caseLeft__part_0_bounds[0].y + (caseLeft__part_0_bounds[1].y - caseLeft__part_0_bounds[0].y) / 2
                caseLeft__part_0 = translate([-caseLeft__part_0_x, -caseLeft__part_0_y, 0], caseLeft__part_0);
                caseLeft__part_0 = rotate([0,0,0], caseLeft__part_0);
                caseLeft__part_0 = translate([caseLeft__part_0_x, caseLeft__part_0_y, 0], caseLeft__part_0);

                caseLeft__part_0 = translate([0,0,0], caseLeft__part_0);
                let result = caseLeft__part_0;
                
            

                // creating part 1 of case caseLeft
                let caseLeft__part_1 = _holesLeft_case_fn();

                // make sure that rotations are relative
                let caseLeft__part_1_bounds = caseLeft__part_1.getBounds();
                let caseLeft__part_1_x = caseLeft__part_1_bounds[0].x + (caseLeft__part_1_bounds[1].x - caseLeft__part_1_bounds[0].x) / 2
                let caseLeft__part_1_y = caseLeft__part_1_bounds[0].y + (caseLeft__part_1_bounds[1].y - caseLeft__part_1_bounds[0].y) / 2
                caseLeft__part_1 = translate([-caseLeft__part_1_x, -caseLeft__part_1_y, 0], caseLeft__part_1);
                caseLeft__part_1 = rotate([0,0,0], caseLeft__part_1);
                caseLeft__part_1 = translate([caseLeft__part_1_x, caseLeft__part_1_y, 0], caseLeft__part_1);

                caseLeft__part_1 = translate([0,0,0], caseLeft__part_1);
                result = result.subtract(caseLeft__part_1);
                
            

                // creating part 2 of case caseLeft
                let caseLeft__part_2 = xlBottomLeft_case_fn();

                // make sure that rotations are relative
                let caseLeft__part_2_bounds = caseLeft__part_2.getBounds();
                let caseLeft__part_2_x = caseLeft__part_2_bounds[0].x + (caseLeft__part_2_bounds[1].x - caseLeft__part_2_bounds[0].x) / 2
                let caseLeft__part_2_y = caseLeft__part_2_bounds[0].y + (caseLeft__part_2_bounds[1].y - caseLeft__part_2_bounds[0].y) / 2
                caseLeft__part_2 = translate([-caseLeft__part_2_x, -caseLeft__part_2_y, 0], caseLeft__part_2);
                caseLeft__part_2 = rotate([0,0,0], caseLeft__part_2);
                caseLeft__part_2 = translate([caseLeft__part_2_x, caseLeft__part_2_y, 0], caseLeft__part_2);

                caseLeft__part_2 = translate([0,0,0], caseLeft__part_2);
                result = result.union(caseLeft__part_2);
                
            

                // creating part 3 of case caseLeft
                let caseLeft__part_3 = wallLeft_case_fn();

                // make sure that rotations are relative
                let caseLeft__part_3_bounds = caseLeft__part_3.getBounds();
                let caseLeft__part_3_x = caseLeft__part_3_bounds[0].x + (caseLeft__part_3_bounds[1].x - caseLeft__part_3_bounds[0].x) / 2
                let caseLeft__part_3_y = caseLeft__part_3_bounds[0].y + (caseLeft__part_3_bounds[1].y - caseLeft__part_3_bounds[0].y) / 2
                caseLeft__part_3 = translate([-caseLeft__part_3_x, -caseLeft__part_3_y, 0], caseLeft__part_3);
                caseLeft__part_3 = rotate([0,0,0], caseLeft__part_3);
                caseLeft__part_3 = translate([caseLeft__part_3_x, caseLeft__part_3_y, 0], caseLeft__part_3);

                caseLeft__part_3 = translate([0,0,0], caseLeft__part_3);
                result = result.union(caseLeft__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return caseLeft_case_fn();
            }

        