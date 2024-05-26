import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import {OrgChart} from 'd3-org-chart';
import axios from 'axios'
import s from './styles.module.css'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import starEmail from '../../assetss/svg/star_email.svg'
import ls from '../../assetss/svg/ls.svg'
import dollar from '../../assetss/svg/dollar.svg'
import unlock from '../../assetss/svg/unlock.svg'
import lock from '../../assetss/svg/lock.svg'
import logo_matrix from '../../assetss/svg/logo_matrix.svg'

const OrgChartComponent = () => {
    const chartRef = useRef(null);
    let chart = null;

    const handleClick = () => {
        alert('click')
    }

    useEffect(() => {
        const getData = async (callback) => {
            d3.csv(
                'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
            ).then((dataFlattened) => {
                console.log(dataFlattened)
                chart = new OrgChart()
                    .container(chartRef?.current)
                    .data(dataFlattened)
                    .nodeWidth((d) => 190)
                    .initialZoom(0.7)
                    .nodeHeight((d) => 255)
                    .childrenMargin((d) => 40)
                    .compactMarginBetween((d) => 15)
                    .compactMarginPair((d) => 80)
                    .nodeContent(function (d, i, arr, state) {
                        return `
                  <div style="padding-top:30px;background-color:none;margin-left:1px;height:${
                            d.height
                        }px;border-radius:2px;overflow:visible">
                    <div style="height:${
                            d.height - 32
                        }px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 4px;
                    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.25);padding:10px;background-color:white;border:1px solid lightgray;">
                    
                     <div style="display:flex;align-items: center;justify-content: space-between">
                            <img src="${dollar}" alt="">
                            <p style="color: rgba(118, 162, 65, 1);font-weight: 600;font-size: 14px;font-family: 'Manrope', sans-serif">online</p>
                           <img src="${unlock}" alt="">
                     </div>
                     
                     <p style="font-family: Manrope,sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 19.12px;
text-align: center;
color: rgba(29, 36, 52, 1);
">
                     ${d.data.parentId || '00000'}
</p>        
                     <p style="
                     font-family: Manrope,sans-serif;
font-size: 14px;
font-weight: 300;
line-height: 19.12px;
text-align: center;
color: rgba(29, 36, 52, 1);
">
                   22/05/18 15:00
</p>

<div style="background: #3351D3;height: 40px;width: calc(100% + 20px);margin-left: -10px;display: flex;align-items: center;justify-content: center">
<img src="${logo_matrix}" alt="">
</div>

<p style="
font-family: Manrope,sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 27.32px;
text-align: center;
color: rgba(29, 36, 52, 1);

">${d.data.name || 'noname'}</p>
                     
                     <div style="display:flex;align-items:center;justify-content:space-between;">
                       <div>
                                <img src='${ls}' alt="">
                       </div>
                         <div class="clickable">
                               <img src='${starEmail}' alt=""/>
                         </div>
                     </div>
                    </div>
            </div>
        `;
                    })
                    .render();
                d3.selectAll('.clickable').on('click', () => alert('Иконка сообщений'));
            })
        }

        if (chartRef) {
            getData()
        }
    }, [chartRef]);

    return <div ref={chartRef} className={s.box}/>;
};

export default OrgChartComponent;
