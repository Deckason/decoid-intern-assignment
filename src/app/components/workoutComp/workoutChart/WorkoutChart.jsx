"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WorkoutChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          scales: {
            x: {
              stacked: true
            },
            y: {
              stacked: true
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            }
          },
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10
            }
          },
          // Adjust the bar width here
          barThickness: 5, // Change this value as needed
          bar: {
            borderRadius: 10 // Change this value to control the roundness
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); 
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default WorkoutChart;
