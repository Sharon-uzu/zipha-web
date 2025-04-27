import React from 'react'
import { LuCircleCheckBig } from "react-icons/lu";

const Compare = () => {
  return (
    
    <div className="comparison">
            <div className="compare">
                <h2>Compare Plans & Features</h2>

                <div className="table-cont">
                    {/* <h2 className="table-title">Orders</h2> */}
                    <div className="overflow">
                        <table className="styl-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Starter</th>
                                <th>Pro</th>
                                <th>Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='title'>Transaction fee</td>
                                <td>8% Transaction fee</td>
                                <td>5% Transaction fee</td>
                                <td>3% Transaction fee</td>
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td>No hidden fees</td>
                                <td>No hidden fees</td>
                                <td>No hidden fees</td>
                                
                            </tr>

                            <tr className='hh'>
                                <td className='title'>Community management</td>
                                <td>Automated Member Invites & Removal</td>
                                <td>Automated Member Invites & Removal</td>
                                <td>Automated Member Invites & Removal</td>
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td>-</td>
                                <td>Discounts Codes & Coupons</td>
                                <td>Discounts Codes & Coupons</td>
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td>-</td>
                                <td>Access Code System</td>
                                <td>Access Code System</td>
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td>-</td>
                                <td>-</td>
                                <td>Automated Subscription Reminders</td>
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td>-</td>
                                <td>-</td>
                                <td>Built-in Affiliate Program</td>
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td>-</td>
                                <td>-</td>
                                <td>Multiple Admin Users</td>
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td>-</td>
                                <td>-</td>
                                <td>Dedicated Customer Success & Growth Teams</td>
                                
                            </tr>



                            {/* start */}

                            <tr className='hh'>
                                <td className='title'>Payments</td>
                                <td>One-time & Recurring Billing</td>
                                <td>One-time & Recurring Billing</td>
                                <td>One-time & Recurring Billing</td>
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td>Multiple Currencies</td>
                                <td>Multiple Currencies</td>
                                <td>Multiple Currencies</td>
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td>-</td>
                                <td>Currency Auto Conversion</td>
                                <td>Currency Auto Conversion</td>
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td>-</td>
                                <td>-</td>
                                <td>Same-day International Payment Settlement</td>
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td>-</td>
                                <td>-</td>
                                <td>Payout in Local Currency</td>
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td>-</td>
                                <td>-</td>
                                <td>Auto-withdrawal Payout</td>
                                
                            </tr>

                        
                        </tbody>
                        </table>
                    </div>

                </div>




            </div>
        </div>
  )
}

export default Compare