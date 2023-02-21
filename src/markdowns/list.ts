type List = {
    title: string
    content?: any
}
import { html } from './first.md';
const list: List[] = [
    {
        title: '第一章',
        // content: html
    },
    {
        title: '第2章',
        // content: html
    },
    {
        title: '第3章',
        // content: html
    },
]
export default list