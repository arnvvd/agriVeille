import head1 from '../../../../static/assets/images/head-1.png'
import head2 from '../../../../static/assets/images/head-2.png'
import head3 from '../../../../static/assets/images/head-3.png'
import head4 from '../../../../static/assets/images/head-4.png'
import head5 from '../../../../static/assets/images/head-6.png'
import head6 from '../../../../static/assets/images/head-6.png'


export default function getHead(id) {
    console.log(id);
    switch (id) {
        case 1:
            return head1
        case 2:
            return head2
        case 3:
            return head3
        case 4:
            return head4
        case 5:
            return head5
        case 6:
            return head6        
        default:
            return head1
    }
}