console.log('hello');
let arr = {
    name: 'Nick',
    age: 25,
    setNewAge(ad) {
        this.age = ad;
    },
    getPension() {
        console.log(65 - this.age)
    }
}
arr.getPension();
arr.setNewAge(27);
arr.getPension();
