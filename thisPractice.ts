class Counter{
    count: number =0;
    incremnet(): void{
        this.count ++;
        console.log(`Count is now: ${this.count}`);
    }
    reset():void{
        this.count=0;
        console.log(`Counter reset. Count is now ${this.count}`);
    }
    
}
const counter = new Counter();
counter.incremnet();
counter.incremnet();
counter.reset();