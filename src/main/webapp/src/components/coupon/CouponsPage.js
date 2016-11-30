import React, {PropTypes} from "react";

class CouponsPage extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            coupon: { title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const coupon = this.state.coupon;
        coupon.title = event.target.value;
        this.setState({coupon: coupon });
    }

    onClickSave() {
        alert(`Saving ${this.state.coupon.title}`);
    }
    render(){
        return(
            <div>
                <h1>Coupons</h1>
                <h2>Add Coupon</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.coupon.title}/>

                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                />
            </div>
        );
    }
}

export default CouponsPage;