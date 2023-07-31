
exports.TasksPage = class TasksPage {

constructor(page){
    this.page = page;
    }

    async viewTask(taskName){
        await this.page.locator("//td[text()='"+taskName+"']/following-sibling::td//a[text()='View']").click();
    }

    async editTask(taskName){
        await this.page.locator("//td[text()='"+taskName+"']/following-sibling::td//a[text()='Edit']").click();
    }

    async deleteTask(taskName){
        await this.page.locator("//td[text()='"+taskName+"']/following-sibling::td//a[text()='Delete']").click();
    }

    async addTask(taskName){
    await this.page.locator("//li[contains(@class, 'nav-item')]//a[text()='Tasks']").click();
    await this.page.getByRole('link', { name: 'Add Task' }).click();
    await this.page.getByLabel('Your Task').fill(taskName);
    await this.page.getByRole('button', { name: 'Save Task' }).click();
    }

} 

