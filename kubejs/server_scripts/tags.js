//priority: 1000
var alltheores = [
    'aluminum',
    'copper',
    'lead',
    'nickel',
    'osmium',
    'platinum',
    'silver',
    'tin',
    'uranium',
    'zinc'
];

events.listen('item.tags', e => {
    //Mek Clumps
    alltheores.forEach(item => {
        e.get('mekanism:clumps/' + item).add('alltheores:' + item + '_clump');
        e.get('mekanism:clumps').add('#mekanism:clumps/' + item);
    });
    //Mek Dirty Dusts
    alltheores.forEach(item => {
        e.get('mekanism:dirty_dusts/' + item).add('alltheores:dirty_' + item + '_dust');
        e.get('mekanism:dirty_dusts').add('#mekanism:dirty_dusts/' + item);
    });
    //Mek Shards
    alltheores.forEach(item => {
        e.get('mekanism:shards/' + item).add('alltheores:' + item + '_shard');
        e.get('mekanism:shards').add('#mekanism:shards/' + item);
    });
    //Mek Crystals
    alltheores.forEach(item => {
        e.get('mekanism:crystals/' + item).add('alltheores:' + item + '_crystal');
        e.get('mekanism:crystals').add('#mekanism:crystals/' + item);
    });
})

//Block tags go here
events.listen('block.tags', function(e) {

})

//Fluid tags go here
events.listen('fluid.tags', function(e) {

})