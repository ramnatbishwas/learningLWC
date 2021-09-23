import { LightningElement ,api} from 'lwc';

export default class HeadlessQuickAction extends LightningElement {
    /**To prevent the quick action from being executed multiple times in parallel in long-running actions, add an internal boolean flag.

The return type of invoke() is void. Returning a Promise makes your method asynchronous, but the returned Promise is ignored.

This code uses a boolean flag to block a double execution and a Promise to wait for the sleep to finish. Even though the return type is void, the code executes asynchronously.*/
   isExecuting = false;

    @api async invoke() {
        if (this.isExecuting) {
            return;
        }

        this.isExecuting = true;
        await this.sleep(2000);
        this.isExecuting = false;
    }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}