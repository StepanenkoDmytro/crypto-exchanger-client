import './Arrow.css';

interface ArrowProps {
    direction: 'left' | 'right' | 'up' | 'down';
    color?: string;
    width?: number;
  };

const Arrow: React.FC<ArrowProps> = ({direction, color, width}) => { 
    
  
    return (
    <div 
        className={`arr-container arr-direction__${direction}`} 
        style={{
            '--arrow-color': color || 'var(--line)',
            '--arrow-width': width && `${width}px` || '30px',
            '--arrow-height': width && width <= 20 ? `${width*1.1}px` : '30px',
            '--arrow-angle': width && width <= 20 ? '40deg' : '30deg',
        }as React.CSSProperties}
    >
        <div className='arr-up'></div>
        <div className='arr-down'></div>
    </div>
    );
}

export default Arrow;
