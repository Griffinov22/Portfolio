const MarqueeSection = () => {
  return (
    <section
      id="hard-section"
      className="hard-section position-relative">
      <h2
        id="work-header"
        className="text-center section-header">
        Websites can be hard to understand sometimes...
      </h2>

      <h3 className="text-center">Let me make it easy</h3>

      <div className="marquee-container pb-3">
        <div className="position-relative d-flex">
          <span className="d-block marquee text-nowrap">
            %&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}
            \\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}
            \\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\
          </span>
          <span className="d-block marquee text-nowrap">
            %&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}
            \\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}
            \\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\
          </span>
        </div>
        <div className="position-relative d-flex">
          <span className="d-block marquee text-nowrap backwards">
            %&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}
            \\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}
            \\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\
          </span>
          <span className="d-block marquee text-nowrap backwards">
            %&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}
            \\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}
            \\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\
          </span>
        </div>
        <div className="position-relative d-flex">
          <span className="d-block marquee text-nowrap">
            /&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}
            \\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}
            \\%&lt;/&gt;?!-{}\\%&lt;
          </span>
          <span className="d-block marquee text-nowrap">
            /&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}
            \\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}\\%&lt;/&gt;?!-{}
            \\%&lt;/&gt;?!-{}\\%&lt;
          </span>
        </div>
      </div>
    </section>
  );
};
export default MarqueeSection;
