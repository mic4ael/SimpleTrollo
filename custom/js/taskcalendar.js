var vue = new Vue({
    el: '#container',
    computed: {
        days: function() {
            return [{
                title: 'Day 1',
                tasks: [{
                    title: 'Task 1',
                    description: 'Description 1'
                }, {
                    title: 'Task 2',
                    description: 'Description 2'
                }]
            }, {
                title: 'Day 2',
                tasks: [{
                    title: 'Task 3',
                    description: 'Description 3'
                }, {
                    title: 'Task 4',
                    description: 'Description 4'
                }]
            }];
        }
    }
});
