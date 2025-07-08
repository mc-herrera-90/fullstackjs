
function FileTree({ tree }) {

  const renderTree = (nodes) => (
    <ul className="ftree">
      {nodes.map((item, index) => (
        <li key={index}>
          {item.type === "folder" ? (
            <details open={item.open}>
              <summary>
                <i className="fa-solid fa-folder"></i>
                <i className="fa-solid fa-folder-open"></i>
                &nbsp;&nbsp;{item.name}
              </summary>
              {renderTree(item.children)}
            </details>
          ) : (
            <div className="file">
              {item.icon === "image" ? (
                <a href={item.download_path} download={item.name}>
                  <i className="fa-solid fa-image fa-lg"></i> {item.name}
                </a>
              ) : (
                <>
                  <i className={`fa-${item.icon.includes('fa-') ? '' : 'brands '} fa-${item.icon} fa-lg`}></i> {item.name}
                </>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return <div className="tree">{renderTree(tree)}</div>;
}

export default FileTree;
